import React, { useEffect } from 'react';
import '../Styles/PetInfo.css';
import { getPetId } from '../actions/petActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../Components/Loading';
import Message from '../Components/Message';
import { getUserId } from '../actions/userActions';

const PetInfoScreen = ({ match }) => {
  const dispatch = useDispatch();

  const petId = useSelector(state => state.getPetDetail);
  const { loading, error, pet } = petId;

  const userId = useSelector(state => state.getUserId);
  const { loading: loadingUser, error: errorUser, user } = userId;

  useEffect(() => {
    dispatch(getPetId(match.params.id));
    const userInfo = localStorage.getItem('userInfo').substring(8, 32);
    dispatch(getUserId(userInfo));
  }, []);
  return (
    <div className="back">
      <div className="add-pet-container">
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <>
            <div className="image-id-container">
              <img src="/image1.png" width="240px" height="350px" alt="pet" />
              <h6>{pet._id}</h6>
            </div>
            <div className="info-container">
              <h1 style={{ margin: '20px' }}>Pet</h1>
              <div className="pet-outer-container">
                <div className="pet-info">
                  <h6>Name: </h6>
                  <h6>Date of Birth: </h6>
                  <h6>Breed: </h6>
                  <h6>Sex: </h6>
                  <h6>Colour: </h6>
                  <h6>Vaccinations: </h6>
                </div>
                <div className="pet-details">
                  <h6>{pet.name} </h6>
                  <h6>28.10.2010</h6>
                  <h6>{pet.race}</h6>
                  <h6>{pet.sex}</h6>
                  <h6>Light Blonde</h6>
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
              </div>
              <h1 style={{ margin: '20px' }}>Owner Information</h1>
              {loadingUser ? (
                <Loader />
              ) : errorUser ? (
                <Message variant="danger">{errorUser}</Message>
              ) : (
                <div className="pet-outer-container">
                  <div className="pet-info">
                    <h6>Name: </h6>
                    <h6>Phone Number: </h6>
                    <h6>E-mail </h6>
                  </div>
                  <div className="pet-details">
                    <h6>{user.name} </h6>
                    <h6>{user.phone}</h6>
                    <h6>{user.email}</h6>
                  </div>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PetInfoScreen;
