import axios from 'axios';
import {
  ADD_APPT_REQUEST,
  ADD_APPT_SUCCESS,
  ADD_APPT_FAIL,
} from '../constants/appointmentConstants';

export const addAppointment = appointment => async dispatch => {
  try {
    dispatch({
      type: ADD_APPT_REQUEST,
    });

    const { data } = await axios.post('/api/appointment', appointment);
    dispatch({
      type: ADD_APPT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADD_APPT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
