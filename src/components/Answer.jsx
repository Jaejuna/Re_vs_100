import React from 'react';

const Answer = (showAnswer, currentQuiz, quizs) => {
  const {quizNo, question, answers} = quizs[currentQuiz];
  return(
    <div className="answer">
    정답 : { showAnswer ? answers[0]+"번" : "???"}
    </div>
  )
}
  export default Answer