import axios from 'axios';

import {
  TAXPAYER_FETCH_REQUEST,
  TAXPAYER_FETCH_SUCCESS,
  TAXPAYER_FETCH_FAIL,
  TAXPAYER_SIGNUP_REQUEST,
  TAXPAYER_SIGNUP_SUCCESS,
  TAXPAYER_SIGNUP_FAIL,
} from '../constants/taxpayerConstants';

export const fetchTaxpayerDetails = (bodydata) => async (dispatch) => {
  try {
    dispatch({ type: TAXPAYER_FETCH_REQUEST });

    const { data } = await axios.post(
      `https://motor-tax.herokuapp.com/api/taxpayer/`,
      bodydata
    );

    dispatch({
      type: TAXPAYER_FETCH_SUCCESS,
      payload: data,
    });

    localStorage.setItem('taxpayerinfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TAXPAYER_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createTaxpayerAcc = (bodyData) => async (dispatch) => {
  try {
    dispatch({ type: TAXPAYER_SIGNUP_REQUEST });

    const { data } = await axios.post(
      'https://motor-tax.herokuapp.com/api/taxpayer/signup',
      bodyData
    );

    dispatch({ type: TAXPAYER_SIGNUP_SUCCESS, payload: data });
  } catch (err) {
    dispatch({
      type: TAXPAYER_SIGNUP_FAIL,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
