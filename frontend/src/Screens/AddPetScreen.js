import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/AddPet.css';
import { Form } from 'react-bootstrap';

const AddPetScreen = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [race, setRace] = useState('');
  const [sex, setSex] = useState('');
  const [colour, setColour] = useState('');
  const [vaccines, setVaccines] = useState({});
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAdress] = useState('');

  const handleChange = event => {
    setVaccines({ ...vaccines, [event.target.name]: event.target.checked });
  };

  return (
    <div className="back">
      <div className="add-pet-container">
        <div className="image-id-container">
          <img src="/image1.png" width="240px" height="350px" alt="pet" />
          <h6>85449481561</h6>
          <button className="customButton">
            <h5 style={{ fontSize: '24px', color: '#ffffff', margin: '0px' }}>
              Change Photo
            </h5>{' '}
          </button>
          <button className="customButton">
            <h5 style={{ fontSize: '24px', color: '#ffffff', margin: '0px' }}>
              Return to main page
            </h5>
          </button>
        </div>
        <div className="info-container">
          <button className="customButton">
            <h5 style={{ fontSize: '24px', color: '#ffffff', margin: '0px' }}>
              Edit
            </h5>
          </button>
          <h1 style={{ margin: '20px' }}>Pet info</h1>
          <div className="pet-outer-container">
            <div className="pet-info">
              <h6>Name: </h6>
              <h6>Date of Birth: </h6>
              <h6>Race: </h6>
              <h6>Sex: </h6>
              <h6>Colour: </h6>
              <h6>Vaccinations: </h6>
            </div>
            <div className="pet-details">
              <Form.Group controlId="nameInput">
                <Form.Control
                  type="name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group
                style={{ margin: '5px 0px 0px 0px' }}
                controlId="dateOfBirth"
              >
                <Form.Control
                  type="date"
                  onChange={e => setDate(e.target.value.toString())}
                ></Form.Control>
              </Form.Group>
              <Form.Group
                style={{ margin: '5px 0px 0px 0px' }}
                controlId="breedInput"
              >
                <Form.Control
                  type="breed"
                  value={race}
                  onChange={e => setRace(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group
                style={{ margin: '5px 0px 0px 0px' }}
                controlId="sexInput"
              >
                <Form.Control
                  type="sex"
                  value={sex}
                  onChange={e => setSex(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group
                style={{ margin: '5px 0px 0px 0px' }}
                controlId="colourInput"
              >
                <Form.Control
                  type="colour"
                  value={colour}
                  onChange={e => setColour(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <div className="vaccine-row">
                <Form.Check
                  inline
                  label="Vaccine1"
                  name="vaccine1"
                  type="radio"
                  checked={vaccines['vaccine1']}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="Vaccine2"
                  name="vaccine2"
                  type="radio"
                  checked={vaccines['vaccine2']}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="Vaccine3"
                  name="vaccine3"
                  type="radio"
                  checked={vaccines['vaccine3']}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  label="Vaccine4"
                  name="vaccine4"
                  type="radio"
                  checked={vaccines['vaccine4']}
                  onChange={handleChange}
                />
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
              <Form.Group controlId="ownerNameInput">
                <Form.Control
                  type="name"
                  value={ownerName}
                  onChange={e => setOwnerName(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group
                style={{ margin: '10px 0px 0px 0px' }}
                controlId="phoneInput"
              >
                <Form.Control
                  type="phone"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group
                style={{ margin: '10px 0px 0px 0px' }}
                controlId="emailInput"
              >
                <Form.Control
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                ></Form.Control>
              </Form.Group>
              <Form.Group
                style={{ margin: '10px 0px 0px 0px' }}
                controlId="addressInput"
              >
                <Form.Control
                  type="name"
                  value={address}
                  onChange={e => setAdress(e.target.value)}
                ></Form.Control>
              </Form.Group>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPetScreen;
