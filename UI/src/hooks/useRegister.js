import { useState } from 'react';
import { useAuthContext } from './useAuthContext';
import axios from 'axios';

export const useRegister = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const { dispatch } = useAuthContext();

  const register = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const res = await axios.post('/user/register', {
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json;charset=UTF-8' },
        body: JSON.stringify({ email, password }),
      });
      const json = await res.json();

      if (!res.status === 200) {
        setIsLoading(false);
        setError(json.error);
      }

      if (res.status === 200) {
        //save user to local storage
        localStorage.setItem('user', JSON.stringify(json));

        //update AuthCOntext
        dispatch({ type: 'LOGIN', payload: json });

        setIsLoading(false);
      }
    } catch (err) {
      console.error('ERROR: ', err);
    }
  };
  return { register, isLoading, error };
};
