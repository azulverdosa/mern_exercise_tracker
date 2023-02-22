import { useState } from 'react';
import { useRegister } from '../hooks/useRegister';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { register, isLoading, error } = useRegister();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    await register(name, email, password);
  };

  return (
    <form className="register" onSubmit={handleRegisterSubmit}>
      <h3>Register</h3>

      <label>Name:</label>
      <input value={name} onChange={(e) => setName(e.target.value)} />

      <label>Email:</label>
      <input type={'email'} value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Password:</label>
      <input type={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />

      <button disabled={isLoading}>Register</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Register;
