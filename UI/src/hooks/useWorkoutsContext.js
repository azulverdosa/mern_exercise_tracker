import { WorkoutsContext } from '../context/WorkoutsContext';
import { useContext } from 'react';

export const useWorkoutContext = () => {
  const context = useContext(WorkoutsContext);
  //WorkoutContext returns the value that is passed into the WorkoutsContext.Provider component SO context = {state, dispatch}

  if (!context) {
    throw Error('useWorkoutsCOntext must be used inside a WorkoutsContextProvider');
  }

  return context;
};

//every time we want to use the workout data, we invoke the useWorkoutContext() to get the context value back
