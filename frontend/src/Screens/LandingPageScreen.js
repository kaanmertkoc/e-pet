import React, { useState, useEffect } from 'react';
import '../Styles/LandingPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { login } from '../actions/userActions';
import { Link } from 'react-router-dom';

const LandingPageScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = useSelector(state => state.userLogin);
  const { loading, error, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      history.push('/main');
    }
  }, [history, userInfo]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="landing-page-container">
      <div className="login-form">
        <div className="login-container">
          <h6>Welcome To E-Pet!</h6>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter your email"
            name="email"
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Enter your password"
            name="password"
          />
          <Button onClick={submitHandler} type="submit">
            <h5 className="button-text">Login</h5>
          </Button>
          <p>Don't have an account? <Link to="/register">Register</Link></p>
        </div>
      </div>

    </div>
  );
};

export default LandingPageScreen;
