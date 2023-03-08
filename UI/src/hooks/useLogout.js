import { useAuthContext } from './useAuthContext';
import { useWorkoutsContext } from './useWorkoutsContext';

//to log out 1) update local state 2) delete JWT from local storage
export const useLogout = () => {
  const { dispatch: authDispatch } = useAuthContext();
  const { dispatch: workoutsDispatch } = useWorkoutsContext();

  const logout = () => {
    //remove user from storage
    localStorage.removeItem('user');

    //dispatch logout action
    authDispatch({ type: 'LOGOUT' });
    workoutsDispatch({ type: 'SET_WORKOUTS', payload: null });

    console.log('User is Logged out');
  };

  return { logout };
};
