import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Styles/VetMainPageScreen.css';
import cino from '../images/cino.jpeg';

const VetMainPageScreen = () => {
    return (
        <div className="vet-main-div">
            <div className="header-patient">
                <h1>Patients</h1>
                <Button className="edit-btn">Add Patient</Button>
            </div>
            <div className="column">
                <img className="pet-img" src={cino} alt="cino-dog" />
                <div className="pet-short-info-div">
                    <p className="pet-info-p">Cino</p>
                    <p className="pet-info-p">123456789</p>
                    <Button className="edit-btn">Edit</Button>
                </div>
            </div>
            <div className="column">
                <img className="pet-img" src={cino} alt="cino-dog" />
                <div className="pet-short-info-div">
                    <p className="pet-info-p">Dino</p>
                    <p className="pet-info-p">12345678910</p>
                    <Button className="edit-btn">Edit</Button>
                </div>
            </div>
            <div className="column">
                <img className="pet-img" src={cino} alt="cino-dog" />
                <div className="pet-short-info-div">
                    <p className="pet-info-p">Fino</p>
                    <p className="pet-info-p">12345678911</p>
                    <Button className="edit-btn">Edit</Button>
                </div>
            </div>
            <div className="column">
                <img className="pet-img" src={cino} alt="cino-dog" />
                <div className="pet-short-info-div">
                    <p className="pet-info-p">Fino</p>
                    <p className="pet-info-p">12345678911</p>
                    <Button className="edit-btn">Edit</Button>
                </div>
            </div>



        </div>
    );
}

export default VetMainPageScreen;