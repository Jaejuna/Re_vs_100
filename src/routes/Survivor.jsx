import React, {useState, useEffect} from 'react';
import { dbService } from '../firebase';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: grid;
    justify-content: center;
    grid-template-rows: 180px auto;
    font-size: 3em;
    font-weight: bolder;
`

const WinnerDiv = styled.div`
    display: flex;
    justify-content: center;
    font-weight: bolder;
`

const Survivor = () => {
    const [lastSurv, setLastSurv] = useState([]);

    useEffect(() => {
        dbService.collection("users").onSnapshot( snapshot => {
            const surv = snapshot.docs.map( doc => doc.data())
            const survee = surv.filter(a => a.available ===true).map( b => b.alias)
            setLastSurv(survee);
        })
    }, []);

    return (
        <Wrapper>
        <div>
            축하드립니다!!! 최후의 생존자 여러분!!!!
        </div>
        <WinnerDiv>
            {[lastSurv]}
        </WinnerDiv>
        </Wrapper>
    )
}

export default Survivor; 