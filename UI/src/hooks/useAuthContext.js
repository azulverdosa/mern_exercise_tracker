import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  //AuthContext returns the value that is passed into the AuthContext.Provider component SO context = {state, dispatch}

  if (!context) {
    throw Error('"useAuthContext" must be used inside a <WorkoutsContextProvider />');
  }

  return context;
};

//every time we want to use the user data, we invoke the useAuthContext() to get the context value back
