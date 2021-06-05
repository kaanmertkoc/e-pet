import React, { useState, useEffect } from 'react';
import '../Styles/SearchPet.css';
import { useDispatch, useSelector } from 'react-redux';

const SearchPetScreen = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="search-pet-container">
        <div className="pet-outer-container">
          <img src="/image1.png" width="250px" height="368px" alt="pet" />
          <div className="pet-info">
            <h6>Name: </h6>
            <h6>Date of Birth: </h6>
            <h6>Breed: </h6>
            <h6>Sex: </h6>
            <h6>Colour: </h6>
            <h6>Vaccinations: </h6>
          </div>
          <div className="pet-details">
            <h6>Cino </h6>
            <h6>28.10.2010</h6>
            <h6>Golden Retreiver</h6>
            <h6>Male</h6>
            <h6>Light Blonde</h6>
            <div className="vaccine-row">
              <div className="vaccine">
                <h6>Vaccine 1</h6>
                <img
                  src="/check-circle-solid.svg"
                  alt="something"
                  width="30px"
                  height="30px"
                />
              </div>
              <div className="vaccine">
                <h6>Vaccine 2</h6>
                <img
                  src="/check-circle-solid.svg"
                  alt="something"
                  width="30px"
                  height="30px"
                />
              </div>
              <div className="vaccine">
                <h6>Vaccine 3</h6>
                <img
                  src="/check-circle-solid.svg"
                  alt="something"
                  width="30px"
                  height="30px"
                />
              </div>
              <div className="vaccine">
                <h6>Vaccine 4</h6>
                <img
                  src="/check-circle-solid.svg"
                  alt="something"
                  width="30px"
                  height="30px"
                />
              </div>
            </div>
          </div>
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
