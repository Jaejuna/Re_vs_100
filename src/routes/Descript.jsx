import React, { useState } from 'react';
import { dbService } from '../firebase';
import Question from './Question';


const Descript = ({userObj}) => {
  const [isClicked, setIsClicked] = useState(false)

  const onNextClick = () => {
    setIsClicked(true);
  }
  const participants = () => {
    dbService.collection("users").get().then(snapshot => 
      snapshot.size
    )}

  return (
    <>
    { isClicked ? (
      <Question />
    )
      :
      <>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
          Asperiores corporis libero odit doloremque esse consectetur 
          iste, impedit ipsum sequi officia? Suscipit quis minima, 
          corrupti ab sapiente placeat non adipisci ex.
        </div>
        <div>
          Participants: 
        </div>
        <button
        onClick = {onNextClick}
        >
          To Question
        </button>
      </>
    }
    </>
  );
}

export default Descript;