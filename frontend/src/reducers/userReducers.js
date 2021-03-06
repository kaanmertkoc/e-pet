import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  GET_USER_PROFILE_REQUEST,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAIL,
  GET_USER_PROFILE_RESET,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_FAIL,
} from '../constants/userConstants';

export const userLoginReducer = (state = { pets: [] }, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userRegisterReducer = (state = { pets: [] }, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return {
        loading: true,
      };
    case USER_REGISTER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
      };
    case USER_REGISTER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const userDetailsReducer = (state = { user: {} }, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case GET_USER_PROFILE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case GET_USER_PROFILE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    case GET_USER_PROFILE_RESET:
      return {
        user: {},
      };
    default:
      return state;
  }
};

export const getUsersReducer = (state = { users: [] }, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        loading: false,
        users: action.payload,
      };
    case GET_USERS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getUserIdReducer = (state = { user: { pet: [] } }, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case GET_USER_BY_ID_REQUEST:
      return {
        loading: true,
        ...state,
      };
    case GET_USER_BY_ID_SUCCESS:
      return {
        loading: false,
        user: action.payload,
      };
    case GET_USER_BY_ID_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
