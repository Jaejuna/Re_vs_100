import React, { useEffect, useState } from 'react';
import { dbService } from '../firebase';
import Board from '../components/Board';
import Submit from '../components/Submit';
import Quizs from '../Quizs';
<<<<<<< HEAD

const Question = ({userObj, doc_user_id, currentInfo}) => {
  const {currentQuiz, showAnswer} = currentInfo;
  const {isAdmin, isSurvived} = userObj;
  const [participants, setParticipants] = useState(0);
  const [corrects, setCorrects] = useState(0);
  //Timer useState
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);
=======
import Button from '../materials/Button';
import styled from 'styled-components';
import Quiz from '../components/Quiz';

const QuizWrapper = styled.div`
    display: grid;
    grid-template-rows: 360px 130px auto;
`

const ButtonsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
`

const Question = ({userObj, doc_user_id, currentInfo}) => {
    const {currentQuiz, showAnswer} = currentInfo;
    const {isAdmin} = userObj;

    const [participants, setParticipants] = useState(0);
    const [corrects, setCorrects] = useState(0);
    //Timer useState
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(0);
>>>>>>> 8515ae9d654c2277439fda9a82bc2f9d2a93f1a2

const onPrevClicked = async() => {
    if( currentQuiz <= 1 ) 
        return;
    await dbService.collection('current').doc('current').update({
        currentQuiz: currentQuiz-1,
        showAnswer: false
    })
}

const onNextClick = async() => {
    await dbService.collection('current').doc('current').update({
        currentQuiz: currentQuiz+1,
        showAnswer: false
    });
}

const onClickHint = async() => {
    await dbService.collection('current').doc('current').update({
    showHint: true
});
}

const onClickDone = async() => {
    await dbService.collection('current').doc('current').update({
    isDone: true
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
    // dbService.collection("quiz_"+no).onSnapshot( snapshot => {
    //     const peopleAnswers = snapshot.docs.map( doc => doc.data());
    //     setParticipants(peopleAnswers.length);
    //     let c = 0, w = [];
    //     peopleAnswers.forEach( person => {
    //       person.answer===answer ?
    //         c++
    //         :
    //         w = [...w, person]
    //     })
    //     setCorrects(c);
    // })
  }, [currentQuiz]);

<<<<<<< HEAD
  // Descript toQuiz 되면 submit 못 누르게, isSurvived = false면 못 누르게
  // userObj 의 available 값을 줘서 button을 disable

  return (
    <>
        <Quiz 
          quizs={Quizs} 
          currentQuiz={currentQuiz}
          showAnswer={showAnswer}/>
          {isAdmin &&
          <>
            <button
            onClick = {onPrevClicked}>
              이전
            </button>
            <button
            onClick = {onNextClick}>
              다음
            </button>
            <button
            onClick = {onClickHint}>
              힌트
            </button>
            <button
            onClick = {onClickDone}>
              결과
            </button>
            <button>
              {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
            </button>
            <br/>
          </>
        }

          <Submit
          quiz={Quizs[currentQuiz]} 
          userObj={userObj} 
          doc_user_id={doc_user_id}
          />
        
        <Board 
        participants={participants} 
        corrects={corrects}
        />
    </>
=======
    return (
        <QuizWrapper>
            <Quiz question={Quizs[currentQuiz].question}/>
            <Submit
                quiz={Quizs[currentQuiz]} 
                userObj={userObj} 
                doc_user_id={doc_user_id}
                showAnswer={showAnswer}
            />
            <Board 
                participants={participants} 
                corrects={corrects}
            />
            {isAdmin &&
            <ButtonsWrapper>
                <Button onClick = {onPrevClicked}> 이전 </Button>
                <Button onClick = {onNextClick}> 다음 </Button>
                <Button onClick = {onClickHint}> 힌트 </Button>
                <Button onClick = {onClickDone}> 결과 </Button>
            </ButtonsWrapper>
            }
        </QuizWrapper>
>>>>>>> 8515ae9d654c2277439fda9a82bc2f9d2a93f1a2
  );
}

export default Question;