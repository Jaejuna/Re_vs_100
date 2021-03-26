import React, { useState } from 'react';
import { dbService } from '../firebase';
import Chance1 from '../components/Chance1';
import Chance2 from '../components/Chance2';

const Hint = (userObj) => {
  const {isAdmin} = userObj;
  const [chance1, setChance1] = useState(false);
  const [chance2, setChance2] = useState(false);
  const onClickChance1 = async() => {
    setChance1(true);
    await dbService.collection('current').doc('current').update({
      showHint: true
    });
  }

  const onClickChance2 = async() => {
    setChance2(true);
    await dbService.collection('current').doc('current').update({
      showHint: true
    });
  }

  const onBackToQuiz = async() => {
    await dbService.collection('current').doc('current').update({
      showHint: false
    });
  }


  return (
    <>
      <>
      {chance1 ? 
      <Chance1 />
      :
      <button onClick = {onClickChance1}>
        한벗님 찬스
      </button>
      }</>
      <>
      {chance2 ? 
      <Chance2 />
      :
      <button onClick = {onClickChance2}>
        벗님들 찬스
      </button>
      }</>
      <button onClick = {onBackToQuiz}>
        퀴즈로 돌아가기
      </button>
    </>
  );
}

export default Hint;