import {
  ADD_APPT_REQUEST,
  ADD_APPT_SUCCESS,
  ADD_APPT_FAIL,
  GET_APPT_REQUEST,
  GET_APPT_SUCCESS,
  GET_APPT_FAIL,
} from '../constants/appointmentConstants';

export const addAppointmentReducer = (state = {}, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_APPT_REQUEST:
      return {
        loading: true,
      };
    case ADD_APPT_SUCCESS:
      return {
        loading: false,
        appointment: action.payload,
      };
    case ADD_APPT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getAppointmentsReducer = (
  state = { appointments: [] },
  action
) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case GET_APPT_REQUEST:
      return {
        loading: true,
      };
    case GET_APPT_SUCCESS:
      return {
        loading: false,
        appointments: action.payload,
      };
    case GET_APPT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
