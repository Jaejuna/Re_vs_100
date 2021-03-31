import React, {useState, useEffect} from 'react';
import { dbService } from '../firebase';
import styled from 'styled-components';
import media from '../styles/media';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import Btn from '../materials/Btn'

const Wrapper = styled.div`
    justify-content: center;
    font-size: 2em;
    font-weight: bolder;
    text-align: center;
    align-items: center;
    letter-spacing: 1.5px;
`
const Crown = styled.div`
    color: white;
`

const Surv = styled.div`
    font-style: italic;
`

const TextColor =styled.div`
    display: inline-grid;
    grid-template-rows: 200px auto auto 100px;
    background: linear-gradient(to bottom, #fce4ec, #e3f2fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    ${media.tablet`
    grid-template-rows: 100px auto auto 100px;
    font-size: 0.6em;
    `}
`

const Survivor = ({userObj}) => {
    const [lastSurv, setLastSurv] = useState([]);
    const {isAdmin} = userObj;

    useEffect(() => {
        dbService.collection("users").onSnapshot( snapshot => {
            const surv = snapshot.docs.map( doc => doc.data())
            .filter(a => a.available ===true)
            .map( b => b.alias).map((x,i,arr)=>(i<arr.length-1)?x+', ':x);
            setLastSurv(surv);
        })
    }, []);

    const onClickToDraw = async() => {
        await dbService.collection('current').doc('current').update({
            isDraw : true
        })
    }

    return (
        <Wrapper>
            <TextColor>
            <div>
                마지막까지 생존하신걸 축하드립니다!!!<br/>
                문자가 발송될 예정이니 꼭 확인해주세요 :) 
            </div>
            <Crown>
                <FontAwesomeIcon icon={faCrown} /> 생존자 명단 <FontAwesomeIcon icon={faCrown} />
            </Crown>
            <Surv>{[lastSurv]}</Surv>
            </TextColor>
            { isAdmin &&
                <Btn onClick = {onClickToDraw}> 추첨 하러 가기 </Btn>
            }
        </Wrapper>
    )
}

export default Survivor; 