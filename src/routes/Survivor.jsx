import React from 'react';

const Survivor = ({userObj}) => {
    const {name, isSurvived} = userObj;

    return (
        <div>
        최후의 생존자
        {isSurvived ? name : ""}
        </div>
    )
}

export default Survivor; 