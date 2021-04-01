import React from 'react';
import styled from 'styled-components';

const ChoiceButton = styled.button`
    /* font-family: ""; */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    font-size: 1.6rem;
    font-weight: bolder;
    border-radius: 5px;
    border: ${({theme, isAnswer}) => isAnswer ? `5px solid ${theme.colors.answerBorder}` : 'none'};;
    color: white;
    position: relative;
    background-color: ${({theme:{colors}, isSelected, isAnswer}) => 
        isSelected ? colors.selected : isAnswer ? colors.answer : colors.main };
<<<<<<< HEAD
        color: ${({theme, isAnswer, isSelected}) => isAnswer ? isSelected ? '#1a17bb' : theme.colors.answerText : theme.colors.text}
=======
    color: ${({theme, isAnswer, isSelected}) => isAnswer ? isSelected ? '#1a17bb' : theme.colors.answerText : theme.colors.text};
>>>>>>> c69f0b9ee8d6cf779eba27184d5f3496993ad017
    ${({isAnswer}) => isAnswer && `opacity: 0.7`} 
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.5s all ease;
    outline: none;
`

const Choice = (props) => {
    return (
        <ChoiceButton {...props}>
            {props.text}
        </ChoiceButton>
    )
}

export default Choice;