import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    const loginInfo = { email, password };

    try {
      const res = await axios.post('/user/login', loginInfo, {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json;charset=UTF-8' },
      });

      if (res.status === 200) {
        //save user to local storage
        localStorage.setItem('user', JSON.stringify(res.data));

        //update AuthCOntext
        dispatch({ type: 'LOGIN', payload: res.data });

        setIsLoading(false);
        console.log('User Loggedin');
        console.log('res.data', res.data);
        console.log('registerInfo', loginInfo);
      }
    } catch (err) {
      console.error('ERROR: ', err);

      setIsLoading(false);
      setError(err?.response?.data?.error || err?.message || 'something went wrong in the server');
    }
  };
  return { login, isLoading, error };
};
