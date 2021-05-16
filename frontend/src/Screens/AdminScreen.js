import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import '../Styles/AdminScreen.css';

const AdminScreen = () => {

    // const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [patients, setPatients] = useState([]);

    const vetRegister = useSelector(state => state.vetRegister);
    // const { loading, error, userInfo } = vetRegister;

    const submitHandler = e => {
        e.preventDefault();
        //     dispatch(register(name, email, password, patients));
    };

    return (
        <div className="admin-main-div">
            <div className="admin-middle-div">
                <div className="admin-form-div">
                    <input
                        type="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder="Enter name"
                        name="name"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Enter email"
                        name="email"
                    />
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                        placeholder="Enter password"
                        name="password"
                    />
                    <Button onClick={submitHandler} type="submit">
                        <h6>ADD VETERINARIAN</h6>
                    </Button>
                </div>
                <h5>E-Pet Admin Page</h5>
            </div>
        </div>
    );

};

export default AdminScreen;