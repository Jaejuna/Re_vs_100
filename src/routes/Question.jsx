import React, { useEffect, useState } from 'react';
import { dbService } from '../firebase';
import Board from '../components/Board';
import Submit from '../components/Submit';
import Quizs from '../Quizs';
import Button from '../materials/Button';
import styled from 'styled-components';
import Quiz from '../components/Quiz';
import Chance from '../components/Chance';
import Timer from '../components/Timer';
import media from '../styles/media';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto;
  width: 100%;
`

const TopWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  margin-bottom: 10px;
  & > div:nth-child(2){
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    & > button {
      margin: 0;
    }
  }
`

const QuizWrapper = styled.div`
    display: grid;
    grid-template-rows: 360px auto auto;
    background-color: ${({theme}) => theme.colors.border};
    border-radius: 15px;
    box-shadow: 10px 10px 20px black;
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

const Question = ({userObj, doc_user_id, currentInfo}) => {
  const {currentQuiz, showAnswer, showHint, isBlocked, part, startedTimestamp} = currentInfo;
  const {isAdmin} = userObj;
  const quiz = Quizs[currentQuiz];
  const [participants, setParticipants] = useState([0, 0, 0]);
  const [surv,setSurv] = useState(0);
  //Timer useState
  const [seconds, setSeconds] = useState(60);

  // modal 바깥 부분 클릭 시 숨기기
  const [display, setDisplay] = useState(false);
  const toggleHint = () => setDisplay(prev => !prev);

  useEffect(() => {
    dbService.collection("users").onSnapshot( snapshot => {
      const survCount = snapshot.docs.map( doc => doc.data()).map( p => p.available);;
      setSurv(survCount.filter(a => a).length)
    })
  }, [currentQuiz]);

  const onPrevClicked = async() => {    
    if( currentQuiz <= 0 ) return;
    await dbService.collection('current').doc('current').update({
        currentQuiz: currentQuiz-1,
        showAnswer: false,
        isBlocked: false,
        startedTimestamp: new Date().getTime()
    })
  }
  
  //next click 할때 타이머 초기화
  const onNextClicked = () => {
    if( currentQuiz === Quizs.length-1 || surv <= 2){
      dbService.collection('current').doc('current').update({
        isDone: true
      })
      setSeconds(0);
    }
    else{
      dbService.collection('current').doc('current').update({
        currentQuiz: currentQuiz+1,
        showAnswer: false,
        isBlocked: false,
        startedTimestamp: new Date().getTime()
      })
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
      isBlocked: true,
      startedTimestamp: 0
    });
  }

  const revealAnswer = async() => {
      dbService.collection('current').doc('current').update({
          showAnswer: true
      });
      const usersRef = dbService.collection('users');
      usersRef.where(
            `quiz_${quiz.no}`, 
            '!=', 
            quiz.answer
        ).get()
        .then((querySnapshot) => {

          // 정답자 0명인 경우
          if(participants[quiz.answer-1]===0)
            throw new Error('AllFailed')

          // 탈락자 available: false 처리
          let batch = dbService.batch();
          console.log(querySnapshot.docs.length)
          querySnapshot.docs.forEach((doc) => {
              const docRef = usersRef.doc(doc.data().uid);
              batch.update(docRef, {available: false});
          })
          batch.commit();
      }).catch( error => {
          if(error.message === 'AllFailed')
            setTimeout(() => alert(
              '모든 참여자가 탈락하였으므로 다음 라운드에서 모두 재도전합니다.'
            ), 3000)
          console.log("Error getting document:", error);
      });
  }
  
  // 선지 별 선택자 수
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
  
  //Timer
  useEffect(() => {
      const countdown = setInterval(() => {
        const now = new Date().getTime();
        const passed = parseInt((now - startedTimestamp) / 1000);
        setSeconds(passed > 61 ? 0 : 61-passed);
        if(passed >=61)
          clearInterval(countdown);
      }, 1000);
      return () => clearInterval(countdown);
    }, [startedTimestamp]);

    return (
      <Wrapper>
        <TopWrapper>
        <Timer seconds={seconds} />
          {isAdmin ?
            <div>
              {!showHint &&
                <Button onClick={onClickHint} disabled={showHint}> 
                  벗님들 찬스 
                </Button>
              } 
            </div>
              : <div />
          }
        </TopWrapper>
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
            <Board {...{showAnswer, quiz, part, participants, currentInfo, userObj}}/>
            <Chance visible={display} toggle={toggleHint} participants={participants} currentQuiz={currentQuiz}/>
      </Wrapper>
  );
}

export default Question;