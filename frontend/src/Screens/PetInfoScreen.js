import React from 'react';
import '../Styles/PetInfo.css';

const PetInfoScreen = () => {
  return (
    <div className="back">
      <div className="add-pet-container">
        <div className="image-id-container">
          <img src="/image1.png" width="240px" height="350px" alt="pet" />
          <h6>85449481561</h6>
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
          <h1 style={{ margin: '20px' }}>Owner Information</h1>
          <div className="pet-outer-container">
            <div className="pet-info">
              <h6>Name: </h6>
              <h6>Phone Number: </h6>
              <h6>E-mail </h6>
              <h6>Adress: </h6>
            </div>
            <div className="pet-details">
              <h6>Arif Dikkanat </h6>
              <h6>+905324587887</h6>
              <h6>dikkanata@hayvansever.com</h6>
              <h6>Earth</h6>
            </div>
          </div>
          <h1 style={{ margin: '20px' }}>Veterinarian Info</h1>
          <div className="pet-outer-container">
            <div className="pet-info">
              <h6>Name: </h6>
              <h6>E-mail </h6>
            </div>
            <div className="pet-details">
              <h6>Muhittin Gösteren </h6>
              <h6>muhogo@epet.com</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetInfoScreen;
