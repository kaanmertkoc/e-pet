import React, { useState, useEffect } from 'react';
import '../Styles/SearchPet.css';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchPetScreen = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="search-pet-container">
        <div className="pet-outer-container">
          <img src="/image1.png" width="250px" height="368px" alt="pet" />
          <div className="pet-info">
            <body>Name: </body>
            <body>Date of Birth: </body>
            <body>Breed: </body>
            <body>Sex: </body>
            <body>Colour: </body>
            <body>Vaccinations: </body>
          </div>
          <div className="pet-details">
            <body>Cino </body>
            <body>28.10.2010</body>
            <body>Golden Retreiver</body>
            <body>Male</body>
            <body>Light Blonde</body>
            <div className="vaccine-row">
              <div className="vaccine">
                <body>Vaccine 1</body>
                <img
                  src="/check-circle-solid.svg"
                  alt="something"
                  width="30px"
                  height="30px"
                />
              </div>
              <div className="vaccine">
                <body>Vaccine 2</body>
                <img
                  src="/check-circle-solid.svg"
                  alt="something"
                  width="30px"
                  height="30px"
                />
              </div>
              <div className="vaccine">
                <body>Vaccine 3</body>
                <img
                  src="/check-circle-solid.svg"
                  alt="something"
                  width="30px"
                  height="30px"
                />
              </div>
              <div className="vaccine">
                <body>Vaccine 4</body>
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
