import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/RegisterPage.css';

const RegisterScreen = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [pets, setPets] = useState([]);
  const [show, setShow] = useState(false);

  const userRegister = useSelector(state => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  useEffect(() => {
    if (userInfo) {
      setShow(true);
    }
  }, [userInfo]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(register(name, email, password, address, phone, pets));
  };

  return (
    <div className="register-main-div">
      <div className="register-middle-div">
        <Alert show={show} variant="success">
          <Alert.Heading> Register Success!</Alert.Heading>
        </Alert>
        <h5>Welcome To E-Pet!</h5>
        <div className="register-form-div">
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
            <h6>Register</h6>
          </Button>
          <p>
            Do you have an account? <Link to="/">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
