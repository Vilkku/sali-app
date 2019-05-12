import React from 'react';
import { exercises } from './data';
import Set from './Set';

function Exercise({ match }) {
  const exerciseId = match.params.id;
  const exercise = exercises[exerciseId];

  let sets = [];
  for (let i = 0; i < exercise.sets; i++) {
    sets.push(<Set key={`${exerciseId}-${i}`} min={exercise.reps.min} max={exercise.reps.max} />);
  }

  return (
    <div>
      <h3>{exercise.name}</h3>
      <h4>{`${exercise.sets} x ${exercise.reps.min}-${exercise.reps.max}`}</h4>
      <div>
        {sets}
      </div>
    </div>
  );
}

export default Exercise;
