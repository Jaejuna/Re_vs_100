import React from "react";

const Quiz = ({quiz, showAnswer}) => {
  const {no, question, answer} = quiz;
  return (
    <div>
        <div className="title"> Q{no}. </div>
        <div className="question"> {question} </div>
        <div className="answer">
            정답 : { showAnswer ? answer[0] : "???"}
        </div>
    </div>
  )
}

export default Quiz;