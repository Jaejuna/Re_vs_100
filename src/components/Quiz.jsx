import React from "react";

const Quiz = ({quizs, currentQuiz ,showAnswer}) => {
  const {no, question, answer, candidates} = quizs[currentQuiz];
  
  return (
    <>
        <div className="title"> Q{no}. </div>
        <div className="question"> {question} </div>
        <div className="answer">
            정답 : { showAnswer ? answer : "???"}
        </div>
    </>
  )
}

export default Quiz;