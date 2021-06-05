import React, { useState, useEffect } from 'react';
import '../Styles/VetInformation.css';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { login } from '../actions/userActions';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import cino from '../images/cino.jpeg';
const VetInformation = ({ history }) => {
  return (
    <div className="vet-main-div">
      <h6> Vet Info</h6>
      <h5>Patients</h5>

      <div className="vet-middle-div"></div>

      <div className="vet-right-div">
        <div className="vet-column">
          <img className="vet-img" src={cino} alt="cino-dog" />
          <div className="vet-pet-info">
            <p className="vet-info-p">Cino</p>
            <p className="vet-info-p">123456789</p>
          </div>
        </div>

        <div className="vet-column">
          <img className="vet-img" src={cino} alt="cino-dog" />
          <div className="vet-pet-info">
            <p className="vet-info-p">Cino</p>
            <p className="vet-info-p">123456789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VetInformation;
