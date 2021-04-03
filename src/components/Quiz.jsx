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
      font-size: 1.5rem;
      line-height: 40px;
      word-break: break-all;
      padding: 10px;
  `}
`

const Quiz = ({quiz}) => {
  const {no, question} = quiz;
  return (
      <QuestionWrapper>
        {"Q"+no+". "+question}
      </QuestionWrapper>
  )
}

export default Quiz;