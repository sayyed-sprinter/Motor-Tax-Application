import axios from 'axios';

import {
  INSURANCE_FETCH_FAIL,
  INSURANCE_FETCH_REQUEST,
  INSURANCE_FETCH_SUCCESS,
} from '../constants/insuranceConstants';

export const getAllInsuranceCompanies = () => async (dispatch) => {
  try {
    dispatch({ type: INSURANCE_FETCH_REQUEST });

    const {
      data: { allInsuranceAgents },
    } = await axios.get(`https://motor-tax.herokuapp.com/api/insurance-agents`);

    dispatch({ type: INSURANCE_FETCH_SUCCESS, payload: allInsuranceAgents });
  } catch (error) {
    dispatch({
      type: INSURANCE_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
