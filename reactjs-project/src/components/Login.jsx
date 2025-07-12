import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login, isLoggedIn } from '../utils/auth';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const dummyEmail = 'test@example.com';
  const dummyPassword = 'password123';

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === dummyEmail && password === dummyPassword) {
      login();
      navigate('/dashboard');
    } else {
      setError('Invalid email or password');
    }
  };

  if (isLoggedIn()) {
    navigate('/dashboard');
  }

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto' }}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
