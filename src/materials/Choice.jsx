import React from 'react';
import styled from 'styled-components';

const ChoiceButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.main};
    color: ${({theme}) => theme.colors.text};
`

const Choice = ({isSelected, isAnswer, no, text, ...others}) => {
    return (
        <ChoiceButton {...others}>
            {text}
        </ChoiceButton>
    )
}

export default Choice;