import React, { useEffect, useState } from 'react';
import { dbService } from '../firebase';
import Quiz from '../components/Quiz';
import Board from '../components/Board';
import Wrongs from '../components/Wrongs';
import Submit from '../components/Submit';


const Question = ({userObj, doc_user_id, currentInfo}) => {
  const {isAdmin} = userObj;
  const {currentQuiz, showAnswer, showWrongs} = currentInfo;


  const [isSolved, setIsSolved] = useState(false);
  const [quizs, setQuizs] = useState([]);
  const [participants, setParticipants] = useState(0);
  const [corrects, setCorrects] = useState(0);
  const [wrongs, setWrongs] = useState([]);

    const setCurrentQuiz = ( idx ) => {
      dbService.collection('current').doc('current').update({
          currentQuiz: idx
      })
  }

  const setShowAnswer = (bool) => {
    dbService.collection('current').doc('current').update({
        showAnswer: bool
    })
}

  const onNextClick = () => {
    setCurrentQuiz(currentQuiz +1);
    setShowAnswer(false);
    dbService.collection("current").doc("current").update({
      showWrongs : false
    })
  }

  const checkSolved = async () => {
    if(!quizs.length)
        return;
    setIsSolved(userObj['quiz_'+quizs[currentQuiz].no]);
  }

  const isCorrectAnswer = (answer, correctAnswerArr) => correctAnswerArr.includes(answer);

    useEffect( async () => {
      const quizData = await dbService.collection('quiz').orderBy('no').get();
      setQuizs(quizData.docs.map(doc => doc.data()));
  }, [])

  useEffect( async () => {
    if(!quizs.length)
        return;
    const currentQuizNo = quizs[currentQuiz].no;
    const correctAnswerArr = (await dbService.collection('quiz').where('no','==',currentQuizNo).get()).docs[0].data().answer;
    dbService.collection("quiz_"+currentQuizNo).onSnapshot( snapshot => {
        const answers = snapshot.docs.map( doc => doc.data() );
        setParticipants(answers.length);
        let c = [], w = [];
        answers.map( a => {
            isCorrectAnswer(a.answer, correctAnswerArr) ? 
                  c = [...c, a]
                : w = [...w, a]
        })
        setCorrects(c.length);
        setWrongs(w);
    })
}, [quizs, currentQuiz])

  return (
    <>
    {
      quizs.length ?
      <Quiz quiz={quizs[currentQuiz]} showAnswer={showAnswer}/>
      :
      <div>퀴즈 로딩중</div>
    }
      <button>
        a.1
      </button>
      <button>
        a.2
      </button>
      <button>
        a.3
      </button>
      {isAdmin &&
        <button
        onClick = {onNextClick}>
          다음
        </button>
      }

      {quizs.length 
        && !showAnswer
        && (
          !isSolved ?
          <Submit no={quizs[currentQuiz].no} userObj={userObj} doc_user_id={doc_user_id}/>
          : <h4 align="center" style={{height: "75px"}}>정답을 제출하셨습니다</h4>
        )}

      {quizs.length && <Board participants={participants} corrects={corrects}/>}
      <Wrongs wrongs={wrongs} isAdmin = {isAdmin} showWrongs={showWrongs}/>
    </>
  );
}

export default Question;