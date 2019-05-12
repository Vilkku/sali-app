import React, { useState } from 'react';

function Set({ min, max }) {
  const [completed, setCompleted] = useState(false);
  const [reps, setReps] = useState(min);

  function handleClick() {
    if (!completed) {
      setCompleted(true);
    } else {
      console.log(reps, min, max);
      if (reps === max) {
        setReps(min);
      } else {
        setReps(reps + 1);
      }
    }
  }

  let style = {
    display: 'inline-block',
    padding: 20,
    borderRadius: 50,
    margin: 5
  };

  if (completed) {
    style.backgroundColor = 'red';
  }

  return (
    <div
      onClick={handleClick}
      style={style}
    >
      {reps}
    </div>
  );
}

export default Set;
