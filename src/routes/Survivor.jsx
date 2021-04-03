import React, {useState, useEffect} from 'react';
import { dbService } from '../firebase';
import styled from 'styled-components';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCrown } from '@fortawesome/free-solid-svg-icons';
import Btn from '../materials/Btn'
import { useHistory } from 'react-router';

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
    grid-template-columns: 50px 280px 50px;
`

const Survivor = ({userObj}) => {
    const [lastSurv, setLastSurv] = useState([]);
    const {isAdmin} = userObj;
    const history = useHistory();
    
    useEffect(() => {
        dbService.collection("users")
            .get()
            .then(querySnapshot => {
                const surv = querySnapshot.docs
                    .map(doc => doc.data())
                    .filter(a => a.available)
                setLastSurv(surv);
                return surv;
            }).then( surv => {
                const survivor = surv.map(({name, alias, number}) => ({name, alias, number}));
                dbService.collection("current").doc("survivor").set({
                    survivor
                });
            })  
    }, []);

    const onClickToDraw = () => history.push("draw");

    return (
        <Wrapper>
            <p>
                최후의 {lastSurv.length}인
            </p>
            {
                lastSurv.map((surv, idx) => (
                    <Winner key={idx}>
                        <FontAwesomeIcon icon={faCrown}/>
                            &nbsp;[&nbsp;{surv.alias}&nbsp;]&nbsp;
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