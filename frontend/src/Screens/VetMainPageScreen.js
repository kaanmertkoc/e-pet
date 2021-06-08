import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../actions/userActions';
import { Form, Button, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import cino from '../images/cino.jpeg';
import '../Styles/VetMainPageScreen.css';
import { getPets } from '../actions/petActions';
import { getAppointments } from '../actions/appointmentAction';
import Loader from '../Components/Loading';
import Message from '../Components/Message';

const VetMainPageScreen = ({ history }) => {
  const dispatch = useDispatch();

  const petList = useSelector(state => state.getPet);
  const { loading, error, pets } = petList;

  const appointmentList = useSelector(state => state.appointmentList);
  const {
    loading: loadingAppointment,
    error: errorAppointment,
    appointments,
  } = appointmentList;
  useEffect(() => {
    dispatch(getPets());
    dispatch(getAppointments());
  }, [dispatch]);
  const goToAddPet = () => {
    history.push('/addPet');
  };
  const goToApps = () => {
    history.push('/vetAppointment');
  };
  const getPatients = () => {
    const userInfo = localStorage.getItem('userInfo').substring(8, 32);
    var patients = [];
    console.log(pets);
    for (var i = 0; i < appointments.length; i++) {
      if (appointments[i].vet === userInfo) {
        console.log('inside');
        for (var j = 0; j < pets.length; j++) {
          if (appointments[i].pet === pets[j]._id) {
            patients.push(pets[j]);
          }
        }
      }
    }
    console.log(patients);
    return patients;
  };
  return (
    <div className="vet-main-div">
      <div className="header-patient">
        <h1>Patients</h1>
        <Button className="edit-btn" onClick={goToAddPet}>
          Add Patient
        </Button>
        <Button className="edit-btn" onClick={goToApps}>
          My Appointments
        </Button>
      </div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : loadingAppointment ? (
        <Loader />
      ) : errorAppointment ? (
        <Message variant="danger">{errorAppointment}</Message>
      ) : (
        <>
          {getPatients().map(patient => (
            <Link
              style={{
                width: '100%',
                color: '#222831',
                textDecoration: 'none',
              }}
              to={`/search/${patient._id}`}
            >
              <div className="column">
                <img className="pet-img" src={cino} alt="cino-dog" />
                <div className="pet-short-info-div">
                  <p className="pet-info-p">{patient.name}</p>
                  <p className="pet-info-p">{patient.race}</p>
                  <p className="pet-info-p">{patient._id}</p>
                </div>
              </div>
            </Link>
          ))}
        </>
      )}
    </div>
  );
};

export default VetMainPageScreen;
