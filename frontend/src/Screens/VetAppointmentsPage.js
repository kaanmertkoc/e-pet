import React, { useState, useEffect } from 'react';
import '../Styles/OwnerAppointmentPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { Route } from 'react-router-dom';
import { getVets } from '../actions/vetAction';
import { getPets } from '../actions/petActions';
import { getAppointments } from '../actions/appointmentAction';
import Loader from '../Components/Loading';
import Message from '../Components/Message';

const VetAppointmentPage = ({ history }) => {
  const dispatch = useDispatch();

  const vetList = useSelector(state => state.vetList);
  const { loading, error, vets } = vetList;

  const petList = useSelector(state => state.getPet);
  const { loading: loadingPets, error: errorPets, pets } = petList;

  const appointmentList = useSelector(state => state.appointmentList);
  const {
    loading: loadingAppointment,
    error: errorAppointment,
    appointments,
  } = appointmentList;

  useEffect(() => {
    dispatch(getVets());
    dispatch(getPets());
    dispatch(getAppointments());
  }, [dispatch]);
  const getApps = () => {
    const userInfo = localStorage.getItem('userInfo').substring(8, 32);

    var apps = [];
    for (var i = 0; i < appointments.length; i++) {
      if (userInfo === appointments[i].vet) {
        const appObject = {
          petName: '',
          appType: appointments[i].appType,
          vetName: '',
          date: appointments[i].date,
        };
        for (var j = 0; j < pets.length; j++) {
          if (appointments[i].pet === pets[j]._id) {
            appObject.petName = pets[j].name;
          }
        }
        for (var k = 0; k < vets.length; k++) {
          if (appointments[i].vet === vets[k]._id) {
            appObject.vetName = vets[k].name;
          }
        }
        console.log(appObject);
        apps.push(appObject);
      }
    }
    console.log(apps);
    return apps;
  };

  const Button = () => (
    <Route
      render={({ history }) => (
        <button
          className="ownerAppointment-page-btn"
          type="button"
          onClick={() => {
            history.push('/vet-main-page');
          }}
        >
          <h5>Return to Main Page</h5>
        </button>
      )}
    />
  );

  return (
    <>
      <Button onClick={Button} type="submit"></Button>

      <div className="ownerAppointment-page-container">
        <h1>Appointments</h1>
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : loadingPets ? (
          <Loader />
        ) : errorPets ? (
          <Message variant="danger">{errorPets}</Message>
        ) : loadingAppointment ? (
          <Loader />
        ) : errorAppointment ? (
          <Message variant="danger">{errorAppointment}</Message>
        ) : (
          <>
            {getApps().map(appointment => (
              <div className="ownerAppointment-card">
                <h6>{appointment.date.substring(0, 10)}</h6>
                <h6>{appointment.vetName}</h6>
                <h6>{appointment.petName}</h6>
                <h6>{appointment.appType}</h6>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
};

export default VetAppointmentPage;
