import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, Alert } from 'react-bootstrap';
import '../Styles/AdminScreen.css';
import { getUsers } from '../actions/userActions.js';
import Loading from '../Components/Loading.js';
import Message from '../Components/Message.js';
import { register } from '../actions/vetAction.js';

const AdminScreen = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [patients, setPatients] = useState([]);
  const [show, setShow] = useState(false);

  const vetRegister = useSelector(state => state.vetRegister);
  const {
    loading: vetLoading,
    error: vetError,
    userInfo: vetInfo,
  } = vetRegister;

  const usersList = useSelector(state => state.usersList);
  const { loading, error, users } = usersList;

  useEffect(() => {
    dispatch(getUsers());
    if (vetInfo) {
      setShow(true);
    }
  }, [dispatch, vetInfo]);

  const submitHandler = e => {
    e.preventDefault();
    dispatch(register(name, email, password, patients));
  };

  return (
    <div className="admin-main-div">
      <div className="admin-middle-div">
        <Alert show={show} variant="success">
          <Alert.Heading> Register Success!</Alert.Heading>
        </Alert>
        <h5>E-Pet Admin Page</h5>
        <div className="admin-form-div">
          <input
            type="name"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter name"
            name="name"
          />
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Enter email"
            name="email"
          />
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            placeholder="Enter password"
            name="password"
          />
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <Form.Group>
              <Form.Group controlId="patients">
                <Form.Label>Select Patients</Form.Label>
                <Form.Control as="select">
                  {users.map(user => (
                    <option>{user.name}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            </Form.Group>
          )}

          <Button onClick={submitHandler} type="submit">
            ADD VETERINARIAN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdminScreen;
