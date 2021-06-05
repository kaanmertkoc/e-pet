import axios from 'axios';
import {
  GET_PET_REQUEST,
  GET_PET_SUCCESS,
  GET_PET_FAIL,
  ADD_PET_REQUEST,
  ADD_PET_SUCCESS,
  ADD_PET_FAIL,
} from '../constants/petConstants';

export const addPet = pet => async dispatch => {
  try {
    dispatch({
      type: ADD_PET_REQUEST,
    });

    const { data } = await axios.post('/api/pet/', pet);
    dispatch({
      type: ADD_PET_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_PET_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
