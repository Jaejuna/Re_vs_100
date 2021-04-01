import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const QuestionWrapper = styled.div`
    max-width: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.main};
    color: ${({theme}) => theme.colors.text};
    border: 5px solid ${({theme}) => theme.colors.border};
    border-bottom: none;
    border-radius: 5px;
    font-size: 2rem;
    font-weight: bolder;
    letter-spacing: 1.5px;
    line-height: 50px;
    padding: 20px;
    ${media.tablet`
      max-width: 300px;
      font-size: 1.5rem;
      line-height: 40px;
  `}
`

const Quiz = ({question}) => {
  
  return (
    <QuestionWrapper>
      {question}
    </QuestionWrapper>
  )
}

export default Quiz;