import React, { useState } from 'react';
import { dbService } from '../firebase';
import Button from '../materials/Button';
import qrcode from '../assets/images/frame.png';
import styled from 'styled-components';
import media from '../styles/media';
import Box from '../materials/Box';

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
`

const Explanation =styled.div`
  font-weight: 600;
  letter-spacing: 0.5px;
  line-height: 2em;
  font-size: large;  
  ${media.tablet`
  font-size: medium;
`}
`

const Img = styled.img`
  width: 100%;
  height: 100%;
`

const Descript = ({isAdmin}) => {
  const [part, setPart] = useState(0);

  const onClickToQuiz = async () => {    
    // toQuiz 누르는 순간까지 참여한 벗님 수 기록
    await dbService.collection('current').doc('current').update({
      toQuiz: true,
      part,
      showAnswer: false,
      block: false,
      showHint: false,
      currentQuiz: 0
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
          <h1>Rules</h1>
            <Explanation>
              1. 3개의 보기 중 정답을 고른다. <br/>
              2. 100인이 먼저 문제를 다 푼 후, 게스트 2인이 푼다. <br/>
              3. 문제를 푸는 데는 1분의 시간제한이 있다. <br/>
              4. 문제를 틀리면 탈락이며, 정답자만 다음 문제로 넘어간다. <br/>
              5. 정답자가 8명(?) 이하로 남으면 프로그램이 종료된다. <br/>
              6. 중간 참여는 불가능하다.<br/>
              7. 게스트 2명은 함께 2번의 찬스를 쓸 수 있다. <br/><br/>
              한벗님 찬스 : 원하는 한 명의 답을 알 수 있다, 없을 시 호스트가 지정. <br/>
              벗님들 찬스 : 모든 벗님이 선택한 답을 알 수 있다.<br/><br/>
              지금까지 {part}명 참여하셨습니다.
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