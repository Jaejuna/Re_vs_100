import React, { useEffect, useState } from 'react';
import { dbService } from '../firebase';
import Board from '../components/Board';
import Submit from '../components/Submit';
import Quizs from '../Quizs';
import Button from '../materials/Button';
import styled from 'styled-components';
import Quiz from '../components/Quiz';
import Chance from '../components/Chance';
import media from '../styles/media';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
`

const QuizWrapper = styled.div`
    display: grid;
    grid-template-rows: 360px auto auto;
    background-color: ${({theme}) => theme.colors.border};
    border-radius: 5px;
    ${media.tablet`
    grid-template-columns: 100%;
    grid-template-rows: 300px;
  `}
`

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  & > button {
    margin: 8px 4px;
  }
`

const TimerWrapper = styled.div`
  width: 100%;
  display: grid;
  justify-content: flex-start;
  font-size: 2em;
  padding: 5% 0;
`

const Question = ({userObj, doc_user_id, currentInfo}) => {
  // 최후의 N인
  const N = 2;

  const {currentQuiz, showAnswer, showHint, isBlocked, part} = currentInfo;
  const {isAdmin} = userObj;
  const quiz = Quizs[currentQuiz];
  const [participants, setParticipants] = useState([0, 0, 0]);
  const [surv,setSurv] = useState(0);
  //Timer useState
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

  // modal 바깥 부분 클릭 시 숨기기
  const [display, setDisplay] = useState(false);
  const toggleHint = () => setDisplay(prev => !prev);

const onPrevClicked = async() => {    
  if( currentQuiz <= 0 ) return;
  await dbService.collection('current').doc('current').update({
      currentQuiz: currentQuiz-1,
      showAnswer: false,
      isBlocked: false
  })
}

  useEffect(() => {
    dbService.collection("users").onSnapshot( snapshot => {
      const survCount = snapshot.docs.map( doc => doc.data()).map( p => p.available);;
      setSurv(survCount.filter(a => a === true).length)
    })
  }, [currentQuiz]);
  
  //next click 할때 타이머 초기화
  const onNextClicked = async() => {
    // 마지막 문제 or 생존자가 5명이거나 이하일때 isDone:true
    if( currentQuiz == Quizs.length-1 || surv <= N-2){
      // await dbService.collection('current').doc('current').update({
      //   isDone: true
      // })
    }else{
      await dbService.collection('current').doc('current').update({
        currentQuiz: currentQuiz+1,
        showAnswer: false,
        isBlocked: false
      })
      setMinutes(1);
      setSeconds(0);
    }
  }

  const onClickHint = async() => {
      toggleHint();
      await dbService.collection('current').doc('current').update({
        showHint: true
      });
  }

  const block = async() => {
      await dbService.collection('current').doc('current').update({
        isBlocked: true
    });
    setMinutes(0);
    setSeconds(0);
  }

  const revealAnswer = () => {
      dbService.collection('current').doc('current').update({
          showAnswer: true
      });
      const usersRef = dbService.collection('users');
      usersRef.where(`quiz_${quiz.no}`, '!=', quiz.answer).get().then((querySnapshot) => {
          let batch = dbService.batch();
          querySnapshot.docs.forEach((doc) => {
              const docRef = usersRef.doc(doc.data().uid);
              batch.update(docRef, {available: false});
          })
          batch.commit();
      }).catch( error => {
          console.log("Error getting document:", error);
      });
  }

  //Timer
    useEffect(() => {
      const countdown = setInterval(() => {
        if (parseInt(seconds) > 0) {
          setSeconds(parseInt(seconds) - 1);
        }
        if (parseInt(seconds) === 0) {
          if (parseInt(minutes) === 0) {
              clearInterval(countdown);
          } else {
            setMinutes(parseInt(minutes) - 1);
            setSeconds(59);
          }
        }
      }, 1000);
      return () => clearInterval(countdown);
    }, [minutes, seconds]);

  useEffect(() => {
    dbService.collection("users").onSnapshot( snapshot => {
      const people = snapshot.docs.map( doc => doc.data()).map( p => p['quiz_' + quiz.no]);
      setParticipants([
        people.filter(a => a===1).length,
        people.filter(a => a===2).length,
        people.filter(a => a===3).length
      ])
    })
  }, [currentQuiz]);

    return (
      <Wrapper>
        {isAdmin &&
        <ButtonsWrapper>
          <Button onClick={onClickHint} disabled={showHint}> 
            찬스 
          </Button>
        </ButtonsWrapper>}
        <QuizWrapper>
            <Quiz question={quiz.question}/>
            <Submit
                quiz={quiz} 
                userObj={userObj} 
                doc_user_id={doc_user_id}
                showAnswer={showAnswer}
                isBlocked={isBlocked}
            />
        </QuizWrapper>
          {isAdmin &&
          <ButtonsWrapper>
              <Button color="secondary" onClick = {onPrevClicked}> 이전 </Button>
              {
                !isBlocked ?
                <Button color="secondary" onClick = {block}> 시간 종료 </Button>
                :showAnswer ?
                <Button onClick = {onNextClicked}> 다음 </Button>
                :
                <Button onClick = {revealAnswer}> 정답 공개 </Button>
              }
          </ButtonsWrapper>
          }
            <Board {...{showAnswer, part, participants}}/>
            <Chance visible={display} toggle={toggleHint} participants={participants}/>
            <TimerWrapper>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </TimerWrapper>
      </Wrapper>
  );
}

export default Question;