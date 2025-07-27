import { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email, password);
    navigate('/');
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
  <h2>Login</h2>
  <input
    className="form-input"
    type="email"
    placeholder="Email"
    onChange={(e) => setEmail(e.target.value)}
    required
  />
  <input
    className="form-input"
    type="password"
    placeholder="Password"
    onChange={(e) => setPassword(e.target.value)}
    required
  />
  <button className="submit-btn" type="submit">Login</button>
</form>

  );
};

export default Login;
