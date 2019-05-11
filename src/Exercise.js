import React from 'react';
import { exercises } from './data';

function Exercise({ match }) {
  const exercise = exercises[match.params.id];

  return (
    <div>
      <h3>{exercise.name}</h3>
    </div>
  );
}

export default Exercise;
