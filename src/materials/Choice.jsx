import React from 'react';
import styled from 'styled-components';

const ChoiceButton = styled.button`
    display: grid;
    grid-template-rows: 15px auto;
    padding: 0;
    background-color: ${({theme, isAnswer}) => isAnswer ? theme.colors.text : theme.colors.main};
    color: ${({theme, isAnswer}) => isAnswer ? theme.colors.main : theme.colors.text};
    place-items: center;
    border: ${({isSelected}) => isSelected ? '5px solid blue' : 'none'};
`
const QuizNo = styled.div`
    border-left: 3px solid white;
    border-right: 3px solid white;
    background: transparent;
    width: 40px;
`

const Choice = ({isSelected, isAnswer, no, text, ...others}) => {
    return (
        <ChoiceButton {...{isSelected, isAnswer, ...others}}>
            <QuizNo>
                {no}
            </QuizNo>
            <div>
                {text}
            </div>
        </ChoiceButton>
    )
}

export default Choice;