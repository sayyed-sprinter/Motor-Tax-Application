import axios from 'axios';

import {
  TAXPAYER_FETCH_REQUEST,
  TAXPAYER_FETCH_SUCCESS,
  TAXPAYER_FETCH_FAIL,
} from '../constants/taxpayerConstants';

export const fetchTaxpayerDetails = (bodydata) => async (dispatch) => {
  try {
    dispatch({ type: TAXPAYER_FETCH_REQUEST });

    const { data } = await axios.post(
      `https://motor-tax.herokuapp.com/api/taxpayer/`,
      bodydata
    );

    dispatch({ type: TAXPAYER_FETCH_SUCCESS, payload: data });
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
