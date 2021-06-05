import React, { useState, useEffect } from 'react';
import '../Styles/OwnerAppointmentPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, InputGroup} from 'react-bootstrap';
import { login } from '../actions/userActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'

const OwnerAppointmentPage = ({ history }) => {
    const Button = () => (
        <Route render={({ history}) => (
          <button
            className='ownerAppointment-page-btn'
            type='button'
            onClick={() => { history.push('/') }}
          >
            <h5>Return to Main Page</h5>
          </button>
        )} />
      )

  return (
    <div className="ownerAppointment-page-container">
      <Button onClick={Button} type="submit">
          </Button>
          <h1>Appointments</h1>     
    </div>
  );
};

export default OwnerAppointmentPage;