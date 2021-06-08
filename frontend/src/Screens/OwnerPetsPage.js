import React, { useState, useEffect } from 'react';
import '../Styles/OwnerPetsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button, InputGroup } from 'react-bootstrap';
import { getPets } from '../actions/petActions';
import { Route } from 'react-router-dom';
import cino from '../images/cino.jpeg';
import Loader from '../Components/Loading';
import Message from '../Components/Message';
import { Link } from 'react-router-dom';

const OwnerPetsPage = ({ history }) => {
  const dispatch = useDispatch();

  const petList = useSelector(state => state.getPet);
  const { loading, error, pets } = petList;

  const Button = () => (
    <Route
      render={({ history }) => (
        <button
          className="ownerPetsAppointment-page-btn"
          type="button"
          onClick={() => {
            history.push('/');
          }}
        >
          <h5>Return to Main Page</h5>
        </button>
      )}
    />
  );

  useEffect(() => {
    dispatch(getPets());
  }, []);

  const getUsersPet = () => {
    const userInfo = localStorage.getItem('userInfo').substring(8, 32);
    const usersPet = [];
    for (var i = 0; i < pets.length; i++) {
      if (userInfo === pets[i].owner) {
        usersPet.push(pets[i]);
      }
    }
    return usersPet;
  };

  return (
    <div className="ownerPets-main-div">
      <Button onClick={Button} type="submit"></Button>
      <h1>My Pets</h1>
      <div className="ownerPets-div">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            {getUsersPet().map(pet => (
              <div className="ownerPets-column">
                <Link
                  style={{
                    width: '100%',
                    color: '#222831',
                    textDecoration: 'none',
                  }}
                  to={`/petInfo/${pet._id}`}
                >
                  <img className="ownerPets-img" src={cino} alt="cino-dog" />
                  <div className="ownerPets-pet-info">
                    <p className="ownerPets-info-p">{pet.name}</p>
                    <p className="ownerPets-info-p">{pet.race}</p>
                    <h6 className="ownerPets-info-p">{pet._id}</h6>
                  </div>
                </Link>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default OwnerPetsPage;
