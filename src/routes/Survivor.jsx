import React, {useState, useEffect} from 'react';
import { dbService } from '../firebase';
import styled from 'styled-components';
import media from '../styles/media';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCrown } from '@fortawesome/free-solid-svg-icons'

const Wrapper = styled.div`
    display: grid;
    justify-content: center;
    grid-template-rows: 250px auto;
    font-size: 2em;
    font-weight: bolder;
    text-align: center;
    letter-spacing: 1.5px;
    line-height: 1.8em;
    ${media.tablet`
    grid-template-rows: 300px auto;
    font-size: 1em;
  `}
`
const Crown = styled.div`
    color: black;
`

const Surv = styled.div`
    font-style: italic;
`
const Survivor = () => {
    const [lastSurv, setLastSurv] = useState([]);

    useEffect(() => {
        dbService.collection("users").onSnapshot( snapshot => {
            const surv = snapshot.docs.map( doc => doc.data())
            .filter(a => a.available ===true)
            .map( b => b.alias).map((x,i,arr)=>(i<arr.length-1)?x+', ':x);
            setLastSurv(surv);
        })
    }, []);

    return (
        <>
        <Wrapper>
            <div>
                마지막까지 생존하신걸 축하드립니다!!!<br/>
                문자가 발송될 예정이니 꼭 확인해주세요 :) 
            </div>
            <Crown>
                <FontAwesomeIcon icon={faCrown} />&nbsp; 생존자 명단 &nbsp;<FontAwesomeIcon icon={faCrown} />
            </Crown>
            <Surv>
                {[lastSurv]}
            </Surv>
        </Wrapper>
        </>
    )
}

export default Survivor; 