import React from 'react';
import styled from 'styled-components';

const ChoiceButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;;
    padding: 0;
    font-size: 2rem;
    font-weight: bolder;
    border: ${({isSelected}) => isSelected ? '5px solid #4242f3' : 'none'};

    position: relative;
    background-color: ${({theme, isAnswer}) => isAnswer ? theme.colors.text : theme.colors.main };
    color: ${({theme, isAnswer}) => isAnswer ? theme.colors.main : theme.colors.text};
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    z-index: 1;

    transition: 0.4s all ease;

    &::before{
        background: #8a8ae9;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: -1;
        transition: all 0.6s ease;
    }


    &::before{
        width: 0%;
        height: 100%;
    }

    &:hover::before{
        width: 100%;
    }
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
            {text}
        </ChoiceButton>
    )
}

export default Choice;