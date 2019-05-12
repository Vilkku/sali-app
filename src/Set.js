import React, { useState } from 'react';
import { connect } from 'react-redux';

function Set({ min, max }) {
  const [completed, setCompleted] = useState(false);
  const [reps, setReps] = useState(min);

  function handleClick() {
    if (!completed) {
      setCompleted(true);
    } else {
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

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  };
};

const SetContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Set);

export default SetContainer;
