import React, { useState } from 'react';
import styled from 'styled-components';
import { dbService } from '../firebase';
import Choice from '../materials/Choice';

const Choices = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 5px;
    background-color: ${({theme}) => theme.colors.border};
    border: 5px solid ${({theme}) => theme.colors.border};
`

const Submit = ({quiz, userObj, doc_user_id, showAnswer}) => {
    const {isAdmin, available} = userObj;
    const {no, answer, candidates} = quiz;
    const [myAnswer, setMyAnswer] = useState(null);

    const onChoiceClicked = async ans => {
        if(!isAdmin && showAnswer)
            return;
        setMyAnswer(ans);
        submitMyAnswer(ans);
    }
    const submitMyAnswer = async (ans) => {
        await dbService.collection('users').doc(doc_user_id).update({
            ['quiz_'+no]: ans
        })
    }

    return(
        <Choices>
            <Choice 
                onClick = {() => onChoiceClicked(1)}
                no={1}
                text={candidates[0]}
                isSelected={myAnswer===1}
                isAnswer={answer===1 && showAnswer}
                disabled={showAnswer}
                disabled={available}
            />
            <Choice 
                onClick = {() => onChoiceClicked(2)}
                no={2}
                text={candidates[1]}
                isSelected={myAnswer===2}
                isAnswer={answer===2 && showAnswer}
                disabled={showAnswer}
                disabled={available}
            />
            <Choice 
                onClick = {() => onChoiceClicked(3)}
                no={3}
                text={candidates[2]}
                isSelected={myAnswer===3}
                isAnswer={answer===3 && showAnswer}
                disabled={showAnswer}
                disabled={available}
            />
        </Choices> 
        // }</>        
    )
}

export default Submit; 