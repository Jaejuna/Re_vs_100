import React from 'react';

const Board = ({participants, corrects}) => {
    return(
        <>
            <div>
              <div>
                참여 : {participants}
              </div>
              <div>
                정답 : {corrects}
              </div>
              <div>
                오답 : {participants - corrects}
              </div>
            </div>
        </>
    )
}

export default Board;