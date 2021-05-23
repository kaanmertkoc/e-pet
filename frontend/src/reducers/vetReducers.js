import {
  VET_LOGIN_REQUEST,
  VET_LOGIN_SUCCESS,
  VET_LOGIN_FAIL,
  VET_REGISTER_REQUEST,
  VET_REGISTER_SUCCESS,
  VET_REGISTER_FAIL,
} from '../constants/vetConstants';

export const vetLoginReducer = (state = { patients: [] }, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case VET_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case VET_LOGIN_SUCCESS:
      return {
        loading: true,
        userInfo: action.payload,
      };
    case VET_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const vetRegisterReducer = (state = { patients: [] }, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case VET_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case VET_REGISTER_SUCCESS:
      return {
        loading: true,
        userInfo: action.payload,
      };
    case VET_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
