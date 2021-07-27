import axios from 'axios';

import {
  TAX_DETAILS_FETCH_FAIL,
  TAX_DETAILS_FETCH_REQUEST,
  TAX_DETAILS_FETCH_SUCCESS,
} from '../constants/taxDetailsConstants';

export const getAllInsuranceCompanies = () => async (dispatch) => {
  try {
    dispatch({ type: TAX_DETAILS_FETCH_REQUEST });

    const { data } = await axios.get(`http://localhost:3000/api/tax-details`);

    dispatch({ type: TAX_DETAILS_FETCH_SUCCESS, payload: data });
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
