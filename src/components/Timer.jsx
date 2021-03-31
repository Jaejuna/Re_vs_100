import React, { useEffect, useRef, useState } from 'react';
import rgbHex from 'rgb-hex';
import styled from 'styled-components';

const Guage = styled.div`
    width: 100%;
    font-size: 20px;
    color: #004033;
    @media(max-width:480px){
        height: 40px;
        max-width: 80px;
        font-size: 20px;
    }
    @media(min-width:480px){
        height: 60px;
        max-width: 120px;
        font-size: 26px;
    }
    @media(min-width:1080px){
        height: 90px;
        max-width: 180px;
        font-size: 32px;
    }
`


const GuageBody = styled.div`
    width: 100%;
    height: 0;
    padding-bottom: 50%;
    background: #e3fce9;
    position: relative;
    border-top-left-radius: 100% 200%;
    border-top-right-radius: 100% 200%;
    overflow: hidden;
`

const GuageFill = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: inherit;
    height: 100%;
    transform-origin: center top;
    transform: rotate(0.25turn);
    transition: transform 0.2s ease-out;
    background-color: ${({offset}) => rgbHex(255,offset,offset)};
    transform: rotate( ${({value}) => value /2 } turn);
`

const GuageCover = styled.div`
    width: 75%;
    height: 150%;
    background-color:#fff7f0;
    border-radius: 50%;
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translateX(-50%);
  
    /* Text */
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 25%;
    box-sizing: border-box;
`

const Timer = ({seconds}) => {
    const perc = seconds / 60;
    const [offset, setOffset] = useState(1);
    
    useEffect(() => {
        setOffset(parseInt( perc > 1 ? 1 : perc < 0 ? 0 :55+192*(1-perc)))
    },[seconds])

    return (
        <Guage>
            <GuageBody>
                <GuageFill offset={offset} />
                <GuageCover>{seconds}</GuageCover>
            </GuageBody>
        </Guage>
    )
}


export default Timer;

