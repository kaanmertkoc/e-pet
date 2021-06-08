import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../Styles/AddPet.css';
import { Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { addPet } from '../actions/petActions';
import Message from '../Components/Message';
import Loading from '../Components/Loading.js';
import { getUsers } from '../actions/userActions.js';

const AddPetScreen = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [race, setRace] = useState('');
  const [sex, setSex] = useState('');
  const [colour, setColour] = useState('');
  const [vaccines, setVaccines] = useState([]);
  const [owner, setOwner] = useState('');
  const [vaccine1, setVaccine1] = useState(false);
  const [vaccine2, setVaccine2] = useState(false);
  const [vaccine3, setVaccine3] = useState(false);
  const [vaccine4, setVaccine4] = useState(false);

  const pet = useSelector(state => state.addPet);
  const { loading, error, petInfo } = pet;

  const usersList = useSelector(state => state.usersList);
  const { loading: loadingUsers, error: errorUsers, users } = usersList;

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleChange = event => {
    if (event.target.name === 'vaccine1') {
      if (vaccine1 === false) setVaccine1(true);
      else setVaccine1(false);
    }
    if (event.target.name === 'vaccine2') {
      if (vaccine2 === false) setVaccine2(true);
      else setVaccine2(false);
    }
    if (event.target.name === 'vaccine3') {
      if (vaccine3 === false) setVaccine3(true);
      else setVaccine3(false);
    }
    if (event.target.name === 'vaccine4') {
      if (vaccine4 === false) setVaccine4(true);
      else setVaccine4(false);
    }
    var found = vaccines.find(function (el) {
      return el === event.target.name;
    });
    if (found === undefined) {
      setVaccines([...vaccines, event.target.name]);
    }
    console.log(vaccines);
  };
  const handleAdd = e => {
    e.preventDefault();
    var ownerId = '';
    for (var i = 0; i < users.length; i++) {
      if (owner === users[i].name) {
        console.log('!');
        ownerId = users[i]._id;
      }
    }
    const petToBeAdded = {
      image: '/cino.png',
      name,
      owner: ownerId,
      race,
      age: 1,
      sex,
      birthDate: date,
      vaccines,
    };
    dispatch(addPet(petToBeAdded));
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
          <button className="customButton" onClick={handleAdd}>
            <h5 style={{ fontSize: '24px', color: '#ffffff', margin: '0px' }}>
              Add
            </h5>
          </button>
          <h1 style={{ margin: '20px' }}>Pet info</h1>
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
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
                <Form.Group
                  style={{ margin: '10px 0px 0px 0px' }}
                  controlId="nameInput"
                >
                  <Form.Control
                    type="name"
                    value={name}
                    onChange={e => setName(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group
                  style={{ margin: '20px 0px 0px 0px' }}
                  controlId="dateOfBirth"
                >
                  <Form.Control
                    type="date"
                    onChange={e => setDate(e.target.value.toString())}
                  ></Form.Control>
                </Form.Group>
                <Form.Group
                  style={{ margin: '20px 0px 0px 0px' }}
                  controlId="breedInput"
                >
                  <Form.Control
                    type="breed"
                    value={race}
                    onChange={e => setRace(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group
                  style={{ margin: '15px 0px 0px 0px' }}
                  controlId="sexInput"
                >
                  <Form.Control
                    type="sex"
                    value={sex}
                    onChange={e => setSex(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <Form.Group
                  style={{ margin: '15px 0px 0px 0px' }}
                  controlId="colourInput"
                >
                  <Form.Control
                    type="colour"
                    value={colour}
                    onChange={e => setColour(e.target.value)}
                  ></Form.Control>
                </Form.Group>
                <div
                  style={{ margin: '25px 0px 0px 0px' }}
                  className="vaccine-row"
                >
                  <Form.Check
                    inline
                    label="Vaccine1"
                    name="vaccine1"
                    type="radio"
                    checked={vaccine1}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    label="Vaccine2"
                    name="vaccine2"
                    type="radio"
                    checked={vaccine2}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    label="Vaccine3"
                    name="vaccine3"
                    type="radio"
                    checked={vaccine3}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    label="Vaccine4"
                    name="vaccine4"
                    type="radio"
                    checked={vaccine4}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
          )}
          <h1 style={{ margin: '20px' }}>Owner Information</h1>
          <div className="pet-outer-container">
            {loadingUsers ? (
              <Loading />
            ) : errorUsers ? (
              <Message variant="danger">{errorUsers}</Message>
            ) : (
              <Form.Group>
                <Form.Group controlId="patients">
                  <Form.Label>Select Owner</Form.Label>
                  <Form.Control
                    as="select"
                    onChange={e => setOwner(e.target.value)}
                  >
                    {users.map(user => (
                      <option>{user.name}</option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Form.Group>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPetScreen;
