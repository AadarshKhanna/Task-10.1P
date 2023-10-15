import React, { useState } from 'react';
import './Signup.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './utils/firebase';

function Login({ a }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      navigate('/');
    } catch (error) {

      // Display an alert when login fails
      window.alert('Wrong email or password');
    }
  };
  return (
    <div>
      <div className='container'>
        <div className='header'>
          <div className='text'>LogIn</div>
          <div className='underline'></div>
        </div>
        <div className='inputs'>
          <div className='input'>
            <input
              type='email'
              placeholder='Email'
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='input'>
            <input
              type='password'
              placeholder='Password'
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className='submit-container'>
          <button className='submit' onClick={handleLogin}>
            Login
          </button>
          <hr />
          <Link to='/signup'>Sign Up Instead</Link>
          {loginError && <p className='error-message'>{loginError}</p>}
        </div>
      </div>
    </div>
  );
}
export default Login;
