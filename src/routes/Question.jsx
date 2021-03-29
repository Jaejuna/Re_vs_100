import React, { useEffect, useState } from 'react';
import { dbService } from '../firebase';
import Board from '../components/Board';
import Submit from '../components/Submit';
import Quizs from '../Quizs';
import Button from '../materials/Button';
import styled from 'styled-components';
import Quiz from '../components/Quiz';
import Chance from '../components/Chance';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto auto auto auto;
`

const QuizWrapper = styled.div`
    display: grid;
    grid-template-rows: 360px auto auto;
    background-color: ${({theme}) => theme.colors.border};
    border-radius: 20px;
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
  const {currentQuiz, showAnswer, showHint, isBlocked, part} = currentInfo;
  const {isAdmin, available} = userObj;
  const quiz = Quizs[currentQuiz];
  const [participants, setParticipants] = useState([0, 0, 0]);
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
  //next click 할때 타이머 초기화
  const onNextClick = async() => {
    if( currentQuiz >= 2 ) 
        return;
    await dbService.collection('current').doc('current').update({
      currentQuiz: currentQuiz+1,
      showAnswer: false,
      isBlocked: false
    })
    setMinutes(1);
    setSeconds(0);
    const timestamp = new Date().getTime();
    console.log(timestamp / 1000)
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
  }

  const revealAnswer = async() => {
      await dbService.collection('current').doc('current').update({
        showAnswer: true
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

  // Descript toQuiz 되면 submit 못 누르게, isSurvived = false면 못 누르게
  // userObj 의 available 값을 줘서 button을 disable

    return (
      <Wrapper>
        <ButtonsWrapper>
        {isAdmin && 
          <Button onClick={onClickHint} disabled={showHint} > 찬스 </Button>}
        </ButtonsWrapper>
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
                <Button onClick = {onNextClick}> 다음 </Button>
                :
                <Button onClick = {revealAnswer}> 정답 공개 </Button>
              }
          </ButtonsWrapper>
          }
            <Board {...{showAnswer, part, participants}}/>
            <h2>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </h2>
            <Chance visible={display} toggle={toggleHint} participants={participants}/>
      </Wrapper>

  );
}

export default Question;