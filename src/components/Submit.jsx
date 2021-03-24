import React, { useState } from 'react';
import { dbService } from '../firebase';

const Submit = ({no, userObj, doc_user_id}) => {
    const {uid, name} = userObj;
    const [answer, setAnswer] = useState('');
    const onInputChange = event => {
        const {target:{value}} = event;
        setAnswer(value)
    }
    const onSubmitClicked = async () => {
        const answerObj = {
            uid,
            name,
            answer
        }
        await dbService.collection('quiz_'+no).add(answerObj);
        await dbService.collection('userinfo').doc(doc_user_id).update({
            ['quiz_'+no]: true
        })
        alert('정답이 제출되었습니다.');
    }
    return(
        <button onClick={onSubmitClicked}>
            제출
        </button>          
    )
}

export default Submit; 