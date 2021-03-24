import React, { useState, useEffect } from 'react';
import { dbService } from '../firebase';

const Draw = () => {
    const [participant, setParticipant] = useState([]);
    const [correcter, setCorrecter] = useState([]);
    useEffect(async ()=>{
        const usersCollection = await dbService.collection('userinfo').get();
        const usersData = usersCollection.docs.map(doc => doc.data()).filter((u, idx)=> idx<15);
        setParticipant(usersData);
    },[])
    const hideName = name => {
        if(name.length <=1)
            return name
        else if(name.length==2)
            return name[0]+'*';
        else if(name.length==3)
            return name[0]+'*'+name[2];
        else
            return name[0]+'**'+name[name.length-1];
    }
    const hideTel = tel => {
        if(tel.length <=4)
            return tel
        else
            return '***-****-'+tel.slice(-4);
    }

    const GetPeopleInfoComponent = ({peopleInfo}) => (
            <div>
                {peopleInfo.map( (p, idx) => {
                    const {name, tel} = p;
                    return (
<>
</>
                    )
                })}
            </div>
    )
    return (
                <div>
                    추첨
                </div>
    )
}

export default Draw; 