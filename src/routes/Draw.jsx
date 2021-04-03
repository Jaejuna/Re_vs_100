import React, { useEffect, useState } from 'react';
import { dbService } from '../firebase';
import styled from 'styled-components';
import media from '../styles/media';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faSmile } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 2em;
    font-weight: bolder;
    text-align: center;
    align-items: center;
    letter-spacing: 1.5px;
    line-height: 1.8em;
    color: white;
    ${media.tablet`
      font-size: 1.5em;
    `}
    ${media.phone`
      font-size: 1em;
    `}
`

const Drawn = styled.div`
    font-style: italic;
`

const Draw = () => {
  const [drawn, setDrawn] = useState([]);

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  useEffect(() => {
    dbService.collection("users")
      .get()
      .then( quertSnapshot => {
        const draw = quertSnapshot.docs
          .map( doc => doc.data())
          .filter(a => !a.isAdmin && !a.available);
        setDrawn(shuffle(draw).slice(0, 8));
        return draw;
      }).then( draw => {
          const drawn = draw.map(({name, alias, number}) => ({name, alias, number}));
          dbService.collection("current").doc("drawn").set({
            drawn
          });
      })  
  }, []);

    return (
      <Wrapper>
        <div>
          당첨 축하드립니다!!!<br/>
          문자가 발송될 예정이니 꼭 확인해주세요 :) 
        </div>
        <div>
        <br/>
          <FontAwesomeIcon icon={faSmile} />  추첨자 명단  <FontAwesomeIcon icon={faSmile} />
        </div>
        <Drawn>{drawn.map(a => a.alias).join(', ')}</Drawn> 
        <br/><br/>
        <div>
          모든 퀴즈 순서가 끝났습니다!
        </div>
      </Wrapper>
    );
  }

export default Draw;