import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import { Form, Button } from 'react-bootstrap';
import '../Styles/RegisterPage.css';
import { Link } from 'react-router-dom';

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [pets, setPets] = useState([]);

  const userRegister = useSelector(state => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const submitHandler = e => {
    e.preventDefault();
    dispatch(register(name, email, password, address, phone, pets));
  };

  return (
    <div className="register-form">
      <div className="register-container">
        <h6>Welcome To E-Pet!</h6>
        <input
          type="name"
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Enter your name"
          name="name"
        />
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
        <input
          type="phone"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="Enter your phone number"
          name="phone"
        />
        <input
          type="address"
          value={address}
          onChange={e => setAddress(e.target.value)}
          placeholder="Enter your address"
          name="address"
        />
        <Button onClick={submitHandler} type="submit">
          <h5 className="button-text">Register</h5>
        </Button>
        <p>
          Do you have an account? <Link to="/">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterScreen;
