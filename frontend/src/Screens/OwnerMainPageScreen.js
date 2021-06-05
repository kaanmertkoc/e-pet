import React, { useState, useEffect } from 'react';
import '../Styles/OwnerMainPageScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { login } from '../actions/userActions';

const OwnerMainPageScreen = ({ history }) => {
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
    <div className="owner-page-container">
      <div className="appointment-form">
        <div className="appointment-container">
          <h6>Appointment</h6>
          <form className='appointment-form-style'>
            <Form.Group as={Form.col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Pick a pet</option>
                <option>Dino1</option>
                <option>Dino2</option>
                <option>Dino3</option>
              </Form.Control>
            </Form.Group>
          </form>
          <form className='appointment-form-style'>
            <Form.Group as={Form.col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Pick Appointment Type</option>
                <option>Dino1</option>
                <option>Dino2</option>
                <option>Dino3</option>
              </Form.Control>
            </Form.Group>
          </form>
          <form className='appointment-form-style'>
            <Form.Group as={Form.col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Pick Veterinarian</option>
                <option>Dino1</option>
                <option>Dino2</option>
                <option>Dino3</option>
              </Form.Control>
            </Form.Group>
          </form>
          <form className='appointment-form-style'>
            <Form.Group as={Form.col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Pick Date</option>
                <option>Dino1</option>
                <option>Dino2</option>
                <option>Dino3</option>
              </Form.Control>
            </Form.Group>
          </form>
          <form className='appointment-form-style'>
            <Form.Group as={Form.col} controlId="formGridState">
              <Form.Control as="select" defaultValue="Choose...">
                <option>Pick Time</option>
                <option>Dino1</option>
                <option>Dino2</option>
                <option>Dino3</option>
              </Form.Control>
            </Form.Group>
          </form>
          <Button onClick={submitHandler} type="submit">
            <h5 className="button-text">Add Appointment</h5>
          </Button>
        </div>
      </div>
      <Button className='owner-page-btn' onClick={submitHandler} type="submit">
        <h5 className="button-text">My Pets</h5>
      </Button>
      <Button className='owner-page-btn' onClick={submitHandler} type="submit">
        <h5 className="button-text">My Appointments</h5>
      </Button>
    </div>
  );
};

export default OwnerMainPageScreen;
