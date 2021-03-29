import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { dbService } from '../firebase';
import Choice from '../materials/Choice';
import media from '../styles/media';

const Choices = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100px;
    ${media.tablet`
        grid-template-columns: 100%;
        grid-template-rows: repeat(3, 60px);
    `}
    grid-gap: 5px;
    background-color: ${({theme}) => theme.colors.border};
    border: 5px solid ${({theme}) => theme.colors.border};
    border-radius: 20px;
`

const Submit = ({quiz, userObj, doc_user_id, showAnswer, isBlocked}) => {
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

    // 문제가 바뀌면 선택지 초기화
    useEffect(() => {
        setMyAnswer(null);
    }, [quiz.no])

    useEffect(() => {
        (async () => {
            if(!showAnswer)
                return;
            if(myAnswer === answer){
                // 정답 색깔 바뀌고 1초 후에 alert
                setTimeout(()=>alert('정답입니다!!'), 1000);
                return;
            }
            setTimeout(()=>alert('정답을 맞추지 못하셨습니다ㅠㅠ 다음 문제부터는 관전만 가능합니다.'), 1000);
        })();
    }, [showAnswer])

    return(
        <Choices>
            <Choice 
                onClick = {() => onChoiceClicked(1)}
                no={1}
                text={candidates[0]}
                isSelected={myAnswer===1}
                isAnswer={answer===1 && showAnswer}
                disabled={!available || showAnswer || (!isAdmin && isBlocked)}
            />
            <Choice 
                onClick = {() => onChoiceClicked(2)}
                text={candidates[1]}
                isSelected={myAnswer===2}
                isAnswer={answer===2 && showAnswer}
                disabled={!available || showAnswer || (!isAdmin && isBlocked)}
            />
            <Choice 
                onClick = {() => onChoiceClicked(3)}
                no={3}
                text={candidates[2]}
                isSelected={myAnswer===3}
                isAnswer={answer===3 && showAnswer}
                disabled={!available || showAnswer || (!isAdmin && isBlocked)}
            />
        </Choices>        
    )
}

export default Submit; 