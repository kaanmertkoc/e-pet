import React, { useState, useEffect } from 'react';
import '../Styles/OwnerInformation.css';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { login } from '../actions/userActions';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'
import cino from '../images/cino.jpeg';

const OwnerInformation = ({ history }) => {

  return (
    <div className="own-main-div">

      <h6> Owner Info</h6>
      <h5>Patients</h5>

      <div className="own-middle-div">

      </div>

      <div className="own-right-div">

        <div className="own-column">
          <img className="own-img" src={cino} alt="cino-dog" />
          <div className="own-pet-info">
            <p className="own-info-p">Cino</p>
            <p className="own-info-p">123456789</p>
          </div>
        </div>

        <div className="own-column">
          <img className="own-img" src={cino} alt="cino-dog" />
          <div className="own-pet-info">
            <p className="own-info-p">Cino</p>
            <p className="own-info-p">123456789</p>
          </div>
        </div>

        <div className="own-column">
          <img className="own-img" src={cino} alt="cino-dog" />
          <div className="own-pet-info">
            <p className="own-info-p">Cino</p>
            <p className="own-info-p">123456789</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default OwnerInformation;