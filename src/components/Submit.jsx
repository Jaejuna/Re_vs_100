import React, { useState } from 'react';
import { dbService } from '../firebase';

const Submit = ({no, userObj, doc_user_id}) => {
    const {uid, name, number ,isAdmin} = userObj;
    const [answer, setAnswer] = useState('');
    
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
        !isAdmin && alert('정답이 제출되었습니다.');
        await dbService.collection('quiz_'+no).add(answerObj);
        await dbService.collection('userinfo').doc(doc_user_id).update({
            ['quiz_'+no]: true
        })
    }}

    return(
        <>
        <button
        value = "1번"
        onClick = {onNumClick}
        >
            1번
        </button>
        <button
        value = "2번"
        onClick = {onNumClick}
        >
            2번
        </button>
        <button
        value = "3번"
        onClick = {onNumClick}
        >
            3번
        </button>
        <button onClick={onSubmitClicked}>
            제출
        </button> 
        </>         
    )
}

export default Submit; 