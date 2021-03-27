import React from 'react';
import styled from 'styled-components';

const ChoiceButton = styled.a`
    display: flex;
    align-items: center;
    justify-content: center;;
    padding: 0;
    font-size: 2rem;
    font-weight: bolder;
    border: ${({theme, isSelected}) => isSelected ? '5px solid ' + theme.colors.selectedBorder : 'none'};

    position: relative;
    background-color: ${({theme:{colors}, isSelected, isAnswer}) => 
        isSelected ? colors.selected : isAnswer ? colors.text : colors.main };
    color: ${({theme, isAnswer}) => isAnswer ? theme.colors.main : theme.colors.text};
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    z-index: 1;

    transition: 0.5s all ease;

    &::before:enabled{
        background: ${({theme:{colors}}) => colors.selected};
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        z-index: -1;
        transition: all 0.6s ease;
    }


    &::before:enabled{
        width: 0%;
        height: 100%;
    }

    &:hover::before:enabled{
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