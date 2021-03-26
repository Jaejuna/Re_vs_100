import React from 'react';
import styled from 'styled-components';

const ChoiceButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors.main}
`

const Choice = ({isSelected, isAnswer, no, text}) => {
    return (
        <ChoiceButton>
            {text}
        </ChoiceButton>
    )
}

export default Choice;