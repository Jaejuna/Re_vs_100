import React, { useState } from 'react';

const Answer = () => {
  const [isNext, setIsNext] = useState(true);
  const onClick = () => {
    setIsNext(true);
  }

  return (
      <>
      <div>
        Ta-da that was the answer
      </div>
      <button>
        next Question
      </button>
      </>
  );
}

export default Answer;