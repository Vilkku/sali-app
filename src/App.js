import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { workoutList, workouts } from './data';
import Home from './Home';
import Workout from './Workout';

function App() {
  return (
    <Router>
      <div>
        <h1>Sali-App</h1>

        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {workoutList.map(id => {
              const workout = workouts[id];
              return (
                <li key={id}>
                  <Link to={'/workouts/' + id}>{workout.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/workouts/:id" component={Workout} />
      </div>
    </Router>
  );
}

export default App;
