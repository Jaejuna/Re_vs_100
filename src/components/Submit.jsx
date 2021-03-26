import React, { useState } from 'react';
import { dbService } from '../firebase';

const Submit = ({no, userObj, doc_user_id, answers, currentQuiz}) => {
    const {uid, name, number ,isAdmin} = userObj;
    const {answer1, answer2, answer3 } = answers[currentQuiz];
    const [answer, setAnswer] = useState(null);
    
    const onNumClick = (event) => {
        event.preventDefault();
        const {target:{value}} = event;
        setAnswer(value)
    }
    const answerObj = {
        uid,
        name,
        answer,
        number,
        isAdmin
    }

    const onSubmitClicked = async () => {
            if(answer===''){
                alert('정답을 입력해주세요.');
                return;
            }else {
            isAdmin &&
            await dbService.collection('users').doc(doc_user_id).update({
                ['quiz_'+no]: true
            })
            await dbService.collection('current').doc('current').update({
                showAnswer : true
            })
            
            !isAdmin && alert('정답이 제출되었습니다.')
            await dbService.collection('quiz_'+no).add(answerObj)
            await dbService.collection('users').doc(doc_user_id).update({
                ['quiz_'+no]: true
            })
        }
    }

    return(
        <>
        <button
        onClick = {() => setAnswer(1)}>
            1번 <br/>
            {answer1}
        </button>
        <button
        onClick = {() => setAnswer(2)}>
            2번<br/>
            {answer2}
        </button>
        <button
        onClick = {() => onNumClick(3)}>
            3번<br/>
            {answer3}
        </button>
        </>         
    )
}

export default Submit; 