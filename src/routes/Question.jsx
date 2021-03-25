import React, { useEffect, useState } from 'react';
import { dbService } from '../firebase';
import Quiz from '../components/Quiz';
import Board from '../components/Board';
import Submit from '../components/Submit';
import Quizs from '../Quizs';
import Descript from '../components/Descript';

const Question = ({userObj, doc_user_id, currentInfo}) => {
  const {currentQuiz, showAnswer, showWrongs, users} = currentInfo;
  const {isAdmin} = userObj;
  const [isSolved, setIsSolved] = useState(false);
  const [participants, setParticipants] = useState(0);
  const [corrects, setCorrects] = useState(0);
  const [onToQuiz, setOnToQuiz] = useState(false);

const onPrevClicked = () => {
  dbService.collection('current').doc('current').update({
      currentQuiz: currentQuiz-1,
      showWrongs: false
  })
}

  const onNextClick = async() => {
    await dbService.collection('current').doc('current').update({
      currentQuiz: currentQuiz+1,
      showWrongs: false,
      showAnswer: false
    });
  }

  const onClickToQuiz = async (event) => {
    event.preventDefault();
    setOnToQuiz(true);
  }

  const checkSolved = async () => {
    setIsSolved(userObj['quiz_'+Quizs[currentQuiz].no]);;
  }

  const isCorrectAnswer = (answer, correctAnswerArr) => correctAnswerArr.includes(answer);

    useEffect(() => {
      checkSolved()
    }, [currentQuiz, userObj])

  useEffect(() => {
    const {no, answers} = Quizs[currentQuiz];
    dbService.collection("quiz_"+no).onSnapshot( snapshot => {
        const peopleAnswers = snapshot.docs.map( doc => doc.data());
        setParticipants(peopleAnswers.length);
        let c = 0, w = [];
        peopleAnswers.forEach( person => {
          isCorrectAnswer(person.answer, answers)?
            c++
            :
            w = [...w, person]
        })
        setCorrects(c);
    })
}, [currentQuiz])

  return (
    <>
      {onToQuiz ?
        <>
          <Quiz 
          quizs={Quizs} 
          currentQuiz = {currentQuiz}
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
          </>
        }

        {Quizs.length 
          && !showAnswer
          && (
            !isSolved ?
            <Submit 
            no={Quizs[currentQuiz].no} 
            userObj={userObj} 
            doc_user_id={doc_user_id}
            />
            : <h4>정답을 제출하셨습니다</h4>
          )}
        
        <Board 
        participants={participants} 
        corrects={corrects}
        />
      </>
      :
      <>
        <Descript/>
        <button
        onClick = {onClickToQuiz}
        >
          ToQuiz
        </button>
      </>}
    </>
  );
}

export default Question;