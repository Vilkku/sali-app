export const workoutList = ['leg'];

export const workouts = {
  leg: {
    name: 'Jalka',
    exercises: ['squat', 'deadlift', 'lunge', 'calf-raise']
  }
};

export const exercises = {
  squat: {
    name: 'Kyykky',
    sets: 4,
    reps: {
      min: 10,
      max: 12
    }
  },
  deadlift: {
    name: 'Suorinjaloin maastaveto',
    sets: 3,
    reps: {
      min: 12,
      max: 15
    }
  },
  lunge: {
    name: 'Askelkyykky',
    sets: 4,
    reps: {
      min: 10,
      max: 12
    }
  },
  'calf-raise': {
    name: 'Pohjenosto',
    sets: 3,
    reps: {
      min: 15,
      max: 20
    }
  }
};
