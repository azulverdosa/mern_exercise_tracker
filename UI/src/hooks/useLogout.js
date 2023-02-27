import { useAuthContext } from './useAuthContext';

//to log out 1) update local state 2) delete JWT from local storage
export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //remove user from storage
    localStorage.removeItem('user');

    //dispatch logout action
    dispatch({ type: 'LOGOUT' });

    console.log('User is Logged out');
  };

  return { logout };
};
