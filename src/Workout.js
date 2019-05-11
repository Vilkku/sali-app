import React from 'react';
import { Route, Link } from "react-router-dom";
import { workouts, exercises } from './data';
import Exercise from './Exercise';

function Workout({ match }) {
  const workout = workouts[match.params.id];

  return (
    <div>
      <h2>{workout.name}</h2>

      <nav>
        <ul>
          {workout.exercises.map(id => {
            const exercise = exercises[id];
            return (
              <li>
                <Link to={`${match.url}/${id}`}>{exercise.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Route path={`${match.path}/:id`} component={Exercise} />
    </div>
  );
}

export default Workout;
