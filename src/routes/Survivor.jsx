import React, {useState, useEffect} from 'react';
import { dbService } from '../firebase';
import styled from 'styled-components';
import media from '../styles/media';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import Btn from '../materials/Btn'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 2em;
    font-weight: bolder;
    text-align: center;
    align-items: center;
    letter-spacing: 1.5px;
    color: #dbe2fd;
`
const Winner = styled.div`
    display: grid;
    grid-template-columns: 50px 200px 50px;
`

const Survivor = ({userObj}) => {
    const [lastSurv, setLastSurv] = useState([]);
    const {isAdmin} = userObj;

    useEffect(() => {
        return dbService.collection("users").onSnapshot( snapshot => {
            const surv = snapshot.docs.map( doc => doc.data())
                .filter(a => a.available)
                .map( b => b.alias);
            setLastSurv(surv);
        })
    }, []);

    const onClickToDraw = () => {
        dbService.collection('current').doc('current').update({
            isDraw : true
        })
    }

    return (
        <Wrapper>
            <p>
                최후의 {lastSurv.length}인
            </p>
            {
                lastSurv.map((surv, idx) => (
                    <Winner key={idx}>
                        <FontAwesomeIcon icon={faCrown}/>
                            &nbsp;[&nbsp;{surv}&nbsp;]님&nbsp;
                        <FontAwesomeIcon icon={faCrown} />
                    </Winner>
                ))
            }
            <p>
                문자가 발송될 예정이니 꼭 확인해주세요!
            </p>

            { isAdmin &&
                <Btn onClick = {onClickToDraw}> 추첨 하러 가기 </Btn>
            }
        </Wrapper>
    )
}

export default Survivor; 