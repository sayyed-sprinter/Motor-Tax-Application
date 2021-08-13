import {
  ADMIN_DELETE_FAIL,
  ADMIN_DELETE_REQUEST,
  ADMIN_DELETE_SUCCESS,
  ADMIN_LOGIN_FAIL,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_RESET,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_SIGNUP_FAIL,
  ADMIN_SIGNUP_REQUEST,
  ADMIN_SIGNUP_RESET,
  ADMIN_SIGNUP_SUCCESS,
} from '../constants/adminConstants';

export const adminSignupReducer = (state = { signupResponse: {} }, action) => {
  switch (action.type) {
    case ADMIN_SIGNUP_REQUEST:
      return { loading: true };
    case ADMIN_SIGNUP_SUCCESS:
      return { loading: false, signupResponse: action.payload };
    case ADMIN_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_SIGNUP_RESET:
      return state;
    default:
      return state;
  }
};

export const adminLoginReducer = (state = { loginResponse: {} }, action) => {
  switch (action.type) {
    case ADMIN_LOGIN_REQUEST:
      return { loading: true };
    case ADMIN_LOGIN_SUCCESS:
      return { loading: false, loginResponse: action.payload };
    case ADMIN_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case ADMIN_LOGIN_RESET:
      return state;
    default:
      return state;
  }
};

export const adminDeleteReducer = (state = { deleteResponse: {} }, action) => {
  switch (action.type) {
    case ADMIN_DELETE_REQUEST:
      return { loading: true };
    case ADMIN_DELETE_SUCCESS:
      return { loading: false, deleteResponse: action.payload };
    case ADMIN_DELETE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
