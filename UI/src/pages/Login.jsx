import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, error, isLoading } = useLogin();

  const clearFields = () => {
    setEmail('');
    setPassword('');
  };
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);

    clearFields();
  };

  return (
    <form className="login" onSubmit={handleLoginSubmit}>
      <h3>Login</h3>

      <label>Email:</label>
      <input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />

      <button disabled={isLoading}>Login</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
