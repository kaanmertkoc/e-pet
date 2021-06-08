import React, { useState, useEffect } from 'react';
import '../Styles/SearchPet.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPetId } from '../actions/petActions';
import { getUsers } from '../actions/userActions';

import Loader from '../Components/Loading';
import Message from '../Components/Message';

const SearchPetScreen = ({ match }) => {
  const dispatch = useDispatch();

  const petReducer = useSelector(state => state.getPetDetail);
  const { loading, error, pet } = petReducer;

  const usersList = useSelector(state => state.usersList);
  const { loading: loadingUsers, error: errorUser, users } = usersList;

  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPetId(match.params.id));
  }, [dispatch, match.params.id]);
  const getOwner = ownerId => {
    for (var i = 0; i < users.length; i++) {
      if (users[i]._id === ownerId) {
        return users[i].name;
      }
    }
  };
  return (
    <>
      <div className="search-pet-container">
        <div className="pet-outer-container">
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : loadingUsers ? (
            <Loader />
          ) : errorUser ? (
            <Message variant="danger">{errorUser}</Message>
          ) : (
            <>
              <img src="/image1.png" width="250px" height="368px" alt="pet" />
              <div className="pet-info">
                <h6>Name: </h6>
                <h6>Date of Birth: </h6>
                <h6>Breed: </h6>
                <h6>Sex: </h6>
                <h6>Age: </h6>
                <h6>Vaccinations: </h6>
                <h6 style={{ margin: '50px 0px 0px 0px' }}>Owner: </h6>
              </div>
              <div className="pet-details">
                <h6>{pet.name} </h6>
                <h6>28.10.2010</h6>
                <h6>{pet.race}</h6>
                <h6>{pet.sex}</h6>
                <h6>{pet.age}</h6>
                <div className="vaccine-row">
                  {pet.vaccines.map(vaccine => (
                    <div className="vaccine">
                      <h6>{vaccine}</h6>
                      <img
                        src="/check-circle-solid.svg"
                        alt="something"
                        width="30px"
                        height="30px"
                      />
                    </div>
                  ))}
                </div>
                <h6>{getOwner(pet.owner)}</h6>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="motto">
        <body>
          We can judge the hearth of a man by his treatment of animals
        </body>
      </div>
    </>
  );
};

export default SearchPetScreen;
