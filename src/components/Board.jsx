import React from 'react';

const Board = ({participants, corrects}) => {
    return(
        <>
            <div>
              <div>
                도전자 : {participants}명
              </div>
              <div>
                생존자 : {corrects}명
              </div>
              <div>
                탈락자 : {participants - corrects}명
              </div>
            </div>
        </>
    )
}

export default Board;