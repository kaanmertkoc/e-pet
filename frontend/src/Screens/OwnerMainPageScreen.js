import React, { useState, useEffect } from 'react';
import '../Styles/OwnerMainPageScreen.css';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { getVets } from '../actions/vetAction';
import { getPets } from '../actions/petActions';
import { addAppointment } from '../actions/appointmentAction';
import Loader from '../Components/Loading';
import Message from '../Components/Message';

const OwnerMainPageScreen = ({ history }) => {
  const dispatch = useDispatch();

  const [pet, setPet] = useState('');
  const [appointmentType, setAppointmentType] = useState('');
  const [vet, setVet] = useState('');
  const [date, setDate] = useState(Date.now);

  const vetList = useSelector(state => state.vetList);
  const { loading, error, vets } = vetList;

  const petList = useSelector(state => state.getPet);
  const { loading: loadingPets, error: errorPets, pets } = petList;

  const submitHandler = e => {
    e.preventDefault();
    var vetId = '';
    var petId = '60bf6fd23692f551f4f71103';

    for (var i = 0; i < vets.length; i++) {
      if (vet === vets[i].name) {
        vetId = vets[i]._id;
      }
    }
    for (var j = 0; j < pets.length; j++) {
      if (pet === pets[j].name) {
        petId = pets[j]._id;
      }
    }
    const userInfo = localStorage.getItem('userInfo').substring(8, 32);

    const appointment = {
      pet: petId,
      appType: appointmentType,
      vet: vetId,
      owner: userInfo,
      date,
    };
    dispatch(addAppointment(appointment));
    history.push('/ownerAppointment');
  };
  const goToPets = e => {
    e.preventDefault();
    history.push('/ownerPets');
  };
  const getUsersPet = () => {
    const userInfo = localStorage.getItem('userInfo').substring(8, 32);

    var usersPet = [];
    for (var i = 0; i < pets.length; i++) {
      if (userInfo === pets[i].owner) {
        usersPet.push(pets[i]);
      }
    }
    return usersPet;
  };
  const goToAddPet = e => {
    e.preventDefault();
    history.push('/addPet');
  };
  const goToAppointments = e => {
    e.preventDefault();
    history.push('/ownerAppointment');
  };
  useEffect(() => {
    dispatch(getPets());
    dispatch(getVets());
  }, [dispatch]);

  return (
    <div className="owner-page-container">
      <div className="appointment-form">
        <div className="appointment-container">
          <h6>Appointment</h6>
          <form className="appointment-form-style">
            {loadingPets ? (
              <Loader />
            ) : errorPets ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <Form.Group as={Form.col} controlId="formGridState">
                <Form.Control
                  as="select"
                  value={pet}
                  onChange={e => setPet(e.target.value)}
                >
                  {getUsersPet().map(pet => (
                    <option>{pet.name}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            )}
          </form>
          <form className="appointment-form-style">
            <Form.Group as={Form.col} controlId="formGridState">
              <Form.Control
                as="select"
                defaultValue="Choose..."
                value={appointmentType}
                onChange={e => setAppointmentType(e.target.value)}
              >
                <option>Pick Appointment Type</option>
                <option>Appointment1</option>
                <option>Appointment2</option>
                <option>Appointment3</option>
              </Form.Control>
            </Form.Group>
          </form>
          <form className="appointment-form-style">
            {loading ? (
              <Loader />
            ) : error ? (
              <Message variant="danger">{error}</Message>
            ) : (
              <Form.Group as={Form.col} controlId="formGridState">
                <Form.Control
                  as="select"
                  value={vet}
                  onChange={e => setVet(e.target.value)}
                >
                  {vets.map(vet => (
                    <option>{vet.name}</option>
                  ))}
                </Form.Control>
              </Form.Group>
            )}
          </form>
          <form className="appointment-form-style">
            <Form.Group
              as={Form.col}
              controlId="formGridState"
              onChange={e => setDate(e.target.value)}
            >
              <Form.Control type="date" />
            </Form.Group>
          </form>
          <Button type="submit" onClick={submitHandler}>
            <h5 className="button-text">Add Appointment</h5>
          </Button>
        </div>
      </div>
      <Button className="owner-page-btn" type="submit" onClick={goToPets}>
        <h5 className="button-text">My Pets</h5>
      </Button>
      <Button
        className="owner-page-btn"
        type="submit"
        onClick={goToAppointments}
      >
        <h5 className="button-text">My Appointments</h5>
      </Button>
      <Button className="owner-page-btn" type="submit" onClick={goToAddPet}>
        <h5 className="button-text">Add Pet</h5>
      </Button>
    </div>
  );
};

export default OwnerMainPageScreen;
