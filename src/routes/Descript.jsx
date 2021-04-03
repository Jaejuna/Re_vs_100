import React, { useState } from 'react';
import { dbService } from '../firebase';
import Button from '../materials/Button';
import qrcode from '../assets/images/frame.png';
import styled from 'styled-components';
import media from '../styles/media';
import Box from '../materials/Box';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserFriends } from '@fortawesome/free-solid-svg-icons';


const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  text-align: left;
  ${media.tablet`
    grid-template-columns: 100%;
    grid-template-rows: auto auto;
  `}
`
const Description = styled.div`
  margin: 30px;
  color: white;
`

const Explanation =styled.div`
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 50px;
  font-size: large;  
  ${media.tablet`
    font-size: medium;
    background: linear-gradient(to bottom, #fce4ec, #e3f2fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 5px;
    line-height: 1.5em;
`}
`
const Counter = styled.div`
  float: right;
  font-weight: bolder;
  font-size: 2rem;
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const Descript = ({isAdmin}) => {
  const [part, setPart] = useState(0);

  const onClickToQuiz = () => {  
    // 모든 참여자를 available하게 바꿈. 
      const usersRef = dbService.collection('users');
      usersRef.get()
        .then((querySnapshot) => {
          let batch = dbService.batch();
          querySnapshot.docs.forEach((doc) => {
            const docRef = usersRef.doc(doc.data().uid);
            batch.update(docRef, {available: true});
          })
          batch.commit();
      }).catch( error => {
          console.log("Error getting document:", error);
      }); 
    // toQuiz 누르는 순간까지 참여한 벗님 수 기록
      dbService.collection('current').doc('current').update({
        toQuiz: true,
        part,
        showAnswer: false,
        block: false,
        showHint: false,
        currentQuiz: 0,
        isDone: false,
        isDraw: false,
        startedTimestamp: new Date().getTime()
      })
      
  }
  

    dbService.collection("users").onSnapshot( snapshot => {
      const people = snapshot.docs.map( doc => doc.data()).length
      setPart(people)
    })

  
  return (
      <Wrapper>
        <div>
          <Description>
          <Counter>
            <FontAwesomeIcon icon={faUserFriends}/> &nbsp;
            {part}
          </Counter>
          <h1>Rules</h1>
            <Explanation>
              <ol>
                <li>3개의 보기 중 정답을 고릅니다. </li>
                <li>100인이 먼저 문제를 다 푼 후, 게스트 2인이 문제를 풉니다. </li>
                <li>각 문제 당 1분의 시간제한이 있습니다. </li>
                <li>각 단계의 정답자만 다음 단계로 넘어갈 수 있습니다. </li>
                <li>최후의 5인이 남을 때까지 퀴즈가 진행됩니다. </li>
                <li>중간 참여는 불가능합니다.</li>
                <li>게스트 2명은 함께 2번의 찬스를 쓸 수 있습니다. </li>
                <ul>
                  <li>한벗님 찬스 : 원하는 한 명의 답을 알 수 있습니다. </li>
                  <li>벗님들 찬스 : 모든 벗님이 선택한 답을 알 수 있습니다.</li>
                </ul>
              </ol>
            </Explanation>
          </Description>
            
            {isAdmin && 
            <Box>
              <Button onClick = {onClickToQuiz}> 퀴즈 시작하기</Button> 
            </Box>
            }
          </div>
          {isAdmin && 
            <Img src={qrcode}/>
          }
      </Wrapper> 
  );
}

export default Descript;