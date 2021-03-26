import React, { useEffect, useState } from 'react';
import { dbService } from '../firebase';
import Quiz from '../components/Quiz';
import Board from '../components/Board';
import Submit from '../components/Submit';
import Quizs from '../Quizs';

const Question = ({userObj, doc_user_id, currentInfo}) => {
  const {currentQuiz, showAnswer} = currentInfo;
  const {isAdmin} = userObj;
  const [participants, setParticipants] = useState(0);
  const [corrects, setCorrects] = useState(0);
  //Timer useState
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(0);

const onPrevClicked = async() => {
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
    const {no, answer} = Quizs[currentQuiz];
    dbService.collection("quiz_"+no).onSnapshot( snapshot => {
        const peopleAnswers = snapshot.docs.map( doc => doc.data());
        setParticipants(peopleAnswers.length);
        let c = 0, w = [];
        peopleAnswers.forEach( person => {
          person.answer===answer ?
            c++
            :
            w = [...w, person]
        })
        setCorrects(c);
    })
  }, [currentQuiz]);

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

        {!showAnswer&& 
          <Submit
          quiz={Quizs[currentQuiz]} 
          userObj={userObj} 
          doc_user_id={doc_user_id}
          />
        }
        
        <Board 
        participants={participants} 
        corrects={corrects}
        />
    </>
  );
}

export default Question;