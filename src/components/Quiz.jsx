import React from "react";
import styled from "styled-components";
import media from "../styles/media";

const QuestionWrapper = styled.div`
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({theme}) => theme.colors.main};
    color: ${({theme}) => theme.colors.text};
    border: 5px solid ${({theme}) => theme.colors.border};
    border-bottom: none;
    border-radius: 20px;
    font-size: 2rem;
    font-weight: bolder;
    ${media.tablet`
    font-size: 1.5rem;
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