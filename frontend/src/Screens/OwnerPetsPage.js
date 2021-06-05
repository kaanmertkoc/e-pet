import React, { useState, useEffect } from 'react';
import '../Styles/OwnerPetsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { login } from '../actions/userActions';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'
import cino from '../images/cino.jpeg';
const OwnerPetsPage = ({ history }) => {
  const Button = () => (
    <Route render={({ history }) => (
      <button
        className='ownerPetsAppointment-page-btn'
        type='button'
        onClick={() => { history.push('/') }}
      >
        <h5>Return to Main Page</h5>
      </button>
    )} />
  )
  const InfoButton = () => (
    <Route render={({ history }) => (
      <button
        type='button'
        onClick={() => { history.push('/') }}
      >
        <h5>Show Info</h5>
      </button>
    )} />
  )

  return (
    <div className="ownerPets-main-div">
      <Button onClick={Button} type="submit">
      </Button>
      <h1>My Pets</h1>
      <div className="ownerPets-div">
        <div className="ownerPets-column">
          <img className="ownerPets-img" src={cino} alt="cino-dog" />
          <div className="ownerPets-pet-info">
            <p className="ownerPets-info-p">Cino</p>
            <p className="ownerPets-info-p">123456789</p>
          </div>
          <Button onClick={InfoButton} type="submit">
          </Button>
        </div>

        <div className="ownerPets-column">
          <img className="ownerPets-img" src={cino} alt="cino-dog" />
          <div className="ownerPets-pet-info">
            <p className="ownerPets-info-p">Cino</p>
            <p className="ownerPets-info-p">123456789</p>
          </div>
          <Button onClick={InfoButton} type="submit">
          </Button>
        </div>

      </div>
    </div>

  );
};

export default OwnerPetsPage;