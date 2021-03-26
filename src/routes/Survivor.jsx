import React, { useState, useEffect } from 'react';
import { dbService } from '../firebase';
import Quizs from '../Quizs';

const Survivor = ( currentInfo) => {
    // type error 떠서 주석 처리 해놓습니당. 
    // const {currentQuiz} = currentInfo;
    // const [survivor, setSurvivor] = useState([]);
    
    // useEffect(() => {
    //     const {no} = Quizs[currentQuiz];
    //     dbService.collection("quiz_"+ no).onSnapshot( snapshot => {
    //         const survivors = snapshot.docs.map( doc => doc.data());
    //         setSurvivor(survivors.length)
    //         console.log(setSurvivor)
    //     })
    // })

    return (
        <div>
        최후의 생존자
        </div>
    )
}

export default Survivor; 