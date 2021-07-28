import axios from 'axios';

import {
  TAX_DETAILS_FETCH_FAIL,
  TAX_DETAILS_FETCH_REQUEST,
  TAX_DETAILS_FETCH_SUCCESS,
} from '../constants/taxDetailsConstants';

export const getTaxDetails = () => async (dispatch) => {
  try {
    dispatch({ type: TAX_DETAILS_FETCH_REQUEST });

    const {
      data: { taxRates },
    } = await axios.get(`https://motor-tax.herokuapp.com/api/tax-details`);

    dispatch({ type: TAX_DETAILS_FETCH_SUCCESS, payload: taxRates });
  } catch (error) {
    dispatch({
      type: TAX_DETAILS_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
