import React, { useState, useEffect } from 'react';
import '../Styles/VetInformation.css';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, InputGroup} from 'react-bootstrap';
import { login } from '../actions/userActions';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom'

const VetInformation = ({ history }) => {

  return (
    <div className="vet-main-div" >
        <h5> Vet Info</h5>
        <h6> Patients</h6>
        <div className="vet-middle-div">
        </div>
        
        
        </div>
  );
};

export default VetInformation;