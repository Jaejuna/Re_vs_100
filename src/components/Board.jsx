import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { dbService } from '../firebase';

const Bar = styled.div`
    padding-top: 20px;
    opacity: ${({show}) => show ? 1 : 0};
    transition: opacity 0.6s linear;

    min-width: 96%;
    height: 50px;
    display: flex;

    // 공통
    & > div{
        box-shadow: 1px 0 4px black;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    // Survived
    & > div:first-child{
        border-top-left-radius: 15px;
        border-bottom-left-radius: 15px;
        background-color: #ce93d8;
        font-weight: bolder;
        width: ${({survived}) => `${survived}%`};
        ${({survived}) => {
            if(!survived)
                return `display: none;`
            else if(survived === 100)
                return `border-radius: 15px;`
            else 
                return `display: flex;`
        }}
    }
    // Failed
    & > div:nth-child(2){
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        background-color: #f3e5f5;
        width: ${({survived}) => `${100 - survived}%`};
        ${({survived}) => {
            if(survived===100)
                return `display: none;`
            else if(!survived)
                return `border-radius: 15px;`
            else
                return `display: flex;`
        }}
    }
`

// part: 전체 참여자
// participants: [1번 선택자, 2번 선택자, 3번 선택자]
const Board = ({showAnswer, quiz, survived, currentInfo}) => {
    const [participants, setParticipants] = useState([0, 0, 0]);
    const [corrects, setCorrects] = useState(0);
    const [all, setAll] = useState(1);
    const {currentQuiz} = currentInfo;
    
    useEffect(() => {
        dbService.collection("users").get().then( snapshot => {
            const people = snapshot.docs.map( doc => doc.data()).map( p => p['quiz_' + quiz.no]);
            const choices = [
                people.filter(a => a===1).length,
                people.filter(a => a===2).length,
                people.filter(a => a===3).length
              ];
            setParticipants(choices)
            setCorrects(choices[quiz.answer-1]);
          })
        setAll(survived);
    }, [showAnswer, quiz.no]);

    return(
        <Bar show={showAnswer} survived={100 * corrects / all}>
            <div> {`${corrects}명 생존`}</div>
            <div> {`${all - corrects}명 탈락`}</div>
        </Bar>
    )
}

export default Board;