import axios from 'axios';
import {
  VET_LOGIN_REQUEST,
  VET_LOGIN_SUCCESS,
  VET_LOGIN_FAIL,
  VET_REGISTER_REQUEST,
  VET_REGISTER_SUCCESS,
  VET_REGISTER_FAIL,
  GET_VETS_REQUEST,
  GET_VETS_SUCCESS,
  GET_VETS_FAIL,
} from '../constants/vetConstants';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({
      type: VET_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      '/api/vet/login',
      { email, password },
      config
    );
    dispatch({
      type: VET_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: VET_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getVets = () => async dispatch => {
  try {
    dispatch({
      type: GET_VETS_REQUEST,
    });

    const { data } = await axios.get('/api/vet');
    dispatch({
      type: GET_VETS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_VETS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register = (name, email, password, patients) => async dispatch => {
  try {
    dispatch({
      type: VET_REGISTER_REQUEST,
    });

    const { data } = await axios.post('/api/vet', {
      name,
      email,
      password,
      patients,
    });
    dispatch({
      type: VET_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: VET_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
