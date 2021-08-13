import axios from 'axios';
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

export const createAdminUser = (bodyData) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_SIGNUP_REQUEST });

    const { data } = await axios.post(
      'https://motor-tax.herokuapp.com/api/admin/signup',
      bodyData
    );

    dispatch({ type: ADMIN_SIGNUP_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: ADMIN_SIGNUP_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const adminUserLogin = (bodyData) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_LOGIN_REQUEST });

    const { data } = await axios.post(
      'https://motor-tax.herokuapp.com/api/admin/login',
      bodyData
    );

    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: data });

    localStorage.setItem('adminprofileinfo', JSON.stringify(data));
    localStorage.removeItem('taxpayerinfo');
  } catch (err) {
    dispatch({
      type: ADMIN_LOGIN_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};

export const deleteAdminAccount = (adminData) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_DELETE_REQUEST });

    const { data } = await axios.delete(
      `https://motor-tax.herokuapp.com/api/admin/${adminData._id}`
    );

    dispatch({ type: ADMIN_DELETE_SUCCESS, payload: data });
    dispatch({ type: ADMIN_LOGIN_RESET });
    dispatch({ type: ADMIN_SIGNUP_RESET });
    localStorage.removeItem('adminprofileinfo');
  } catch (error) {
    dispatch({
      type: ADMIN_DELETE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
