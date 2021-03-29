import React, {useState, useEffect} from 'react';
import { dbService } from '../firebase';

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
        <>
        <div>
            축하드립니다!!! 최후의 생존자 여러분!!!!
        </div>
        <div>
            {[lastSurv]}
        </div>
        </>
    )
}

export default Survivor; 