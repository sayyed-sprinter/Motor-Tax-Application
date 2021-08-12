import {
  TAXPAYER_FETCH_REQUEST,
  TAXPAYER_FETCH_SUCCESS,
  TAXPAYER_FETCH_FAIL,
  TAXPAYER_FETCH_RESET,
  TAXPAYER_SIGNUP_REQUEST,
  TAXPAYER_SIGNUP_SUCCESS,
  TAXPAYER_SIGNUP_FAIL,
  TAXPAYER_LOGIN_REQUEST,
  TAXPAYER_LOGIN_SUCCESS,
  TAXPAYER_LOGIN_FAIL,
} from '../constants/taxpayerConstants';

export const taxpayerReducer = (state = {}, action) => {
  switch (action.type) {
    case TAXPAYER_FETCH_REQUEST:
      return { loading: true };
    case TAXPAYER_FETCH_SUCCESS:
      return {
        loading: false,
        success: true,
        taxpayerinfo: action.payload,
      };
    case TAXPAYER_FETCH_FAIL:
      return { loading: false, error: action.payload, success: false };
    case TAXPAYER_FETCH_RESET:
      return { taxpayerinfo: {}, success: false };
    default:
      return state;
  }
};

export const taxpayerSignupReducer = (
  state = { signupResponse: {} },
  action
) => {
  switch (action.type) {
    case TAXPAYER_SIGNUP_REQUEST:
      return { loading: true };
    case TAXPAYER_SIGNUP_SUCCESS:
      return { loading: false, signupResponse: action.payload };
    case TAXPAYER_SIGNUP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const taxpayerLoginReducer = (state = { loginResponse: {} }, action) => {
  switch (action.type) {
    case TAXPAYER_LOGIN_REQUEST:
      return { loading: true };
    case TAXPAYER_LOGIN_SUCCESS:
      return { loading: false, loginResponse: action.payload };
    case TAXPAYER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
