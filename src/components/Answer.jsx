import React from 'react';

const Answer = (showAnswer, currentQuiz, quizs) => {
  const {quizNo, question, answer} = quizs[currentQuiz];
  return(
    <div className="answer">
    정답 : { showAnswer ? answer+"번" : "???"}
    </div>
  )
}
  export default Answer