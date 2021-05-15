import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';

const RegisterScreen = () => {
  const dispatch = useSelector();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [pets, setPets] = useState([]);

  const registerLogin = useSelector(state => state.registerLogin);
  const { loading, error, userInfo } = registerLogin;

  const submitHandler = e => {
    e.preventDefault();
    dispatch(register(name, email, password, address, phone, pets));
  };

  return <div></div>;
};

export default RegisterScreen;
