import React from "react";
import styled from "styled-components";

const QuestionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.main};
    color: ${({theme}) => theme.colors.text};
    border: 5px solid ${({theme}) => theme.colors.border};
    border-bottom: none;
    font-size: 1.5rem;
    width: 100%;
`

const Quiz = ({question}) => {
  
  return (
    <QuestionWrapper>
      {question}
    </QuestionWrapper>
  )
}

export default Quiz;