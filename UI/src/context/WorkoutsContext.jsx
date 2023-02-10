import { createContext, useReducer } from 'react';

export const WorkoutsContext = createContext();

//defining reducer function passed into useReducer
export const workoutsReducer = (state, action) => {
  //state here is initial (previous) state before reducer change - from useRecuder
  //action is the object that is passed into the disptch function
  //first check action type from dispatch & return new state value (payload)
  switch (action.type) {
    case 'SET_WORKOUTS':
      return {
        workouts: action.payload, //workouts is the initial state object in the provider function
      };
    case 'CREATE_WORKOUT':
      return {
        workouts: [action.payload, ...state.workouts], //adding this new workout to the current ones
      };
    case 'DELETE_WORKOUT':
      return {
        workouts: state.workouts.filter((workout) => workout._id !== action.payload._id), //removing a workout from the current ones
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, { workouts: null });
  //state is state
  //dispatch updates state
  //workoutsReducer is reducer function
  //{workouts: null} is initial state object

  // dispatch({ type: 'GET_WORKOUTS', payload: [{}] });
  //{type:'GET_WORKOUTS', payload: [{}]} is the action object
  //type = describes in words the state change that is made
  //payload = any data neede to make the type change
  //dispatch function invokes reducer function (workoutsReducer) and passes the action into the reducder function to update state using the action data

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>{children}</WorkoutsContext.Provider>
  );
};
