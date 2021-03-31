import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { dbService } from '../firebase';
import Box from '../materials/Box';
import Quizs from '../Quizs';

const Wrapper = styled(Box)`
    padding-top: 20px;
    opacity: ${({show}) => show ? 1 : 0};
    transition: opacity 0.6s linear;
`

const Bar = styled.div`
    width: 96%;
    height: 50px;
    display: grid;
    grid-template-columns: ${({survived}) => `${10 + 0.8 * survived}% ${90 - 0.8 * survived}%`};

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
    }
    // Failed
    & > div:nth-child(2){
        border-top-right-radius: 15px;
        border-bottom-right-radius: 15px;
        background-color: #f3e5f5;
    }
`


// part: 전체 참여자
// participants: [1번 정답자, 2번 정답자, 3번 정답자]
// 어렵다...
const Board = ({showAnswer, part, participants, currentInfo}) => {
    const [corrects, setCorrects] = useState(0);
    const {currentQuiz} = currentInfo;
    
    useEffect(() => {
        dbService.collection("users").onSnapshot( snapshot => {
            const people = snapshot.docs.map( doc => doc.data()).filter( user => user.available ).length
            setCorrects(people);
        })
    }, [currentQuiz]);

    return(
        <Wrapper show={showAnswer}>
            <Bar survived={100 * corrects / part}>
                <div> {corrects}명 생존</div>
                <div> {part - corrects}명 탈락</div>
            </Bar>
        </Wrapper>
    )
}

export default Board;