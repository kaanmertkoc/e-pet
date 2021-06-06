import React, { useState, useEffect } from 'react';
import '../Styles/SearchPet.css';
import { useDispatch, useSelector } from 'react-redux';
import { getPetId } from '../actions/petActions';
import Loader from '../Components/Loading';
import Message from '../Components/Message';

const SearchPetScreen = ({ match }) => {
  const dispatch = useDispatch();

  const petReducer = useSelector(state => state.getPetDetail);
  const { loading, error, pet } = petReducer;

  useEffect(() => {
    dispatch(getPetId(match.params.id));
  }, [dispatch, match.params.id]);
  return (
    <>
      <div className="search-pet-container">
        <div className="pet-outer-container">
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
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
