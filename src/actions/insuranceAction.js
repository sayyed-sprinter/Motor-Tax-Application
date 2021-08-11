import axios from 'axios';

import {
  INSURANCE_FETCH_FAIL,
  INSURANCE_FETCH_REQUEST,
  INSURANCE_FETCH_SUCCESS,
  INSURANCE_LATEST_FETCH_FAIL,
  INSURANCE_LATEST_FETCH_REQUEST,
  INSURANCE_LATEST_FETCH_SUCCESS,
  INSURANCE_POST_FAIL,
  INSURANCE_POST_REQUEST,
  INSURANCE_POST_SUCCESS,
  INSURANCE_REPORT_FETCH_FAIL,
  INSURANCE_REPORT_FETCH_REQUEST,
  INSURANCE_REPORT_FETCH_SUCCESS,
} from '../constants/insuranceConstants';

export const createNewlInsuranceCompany =
  (company_details) => async (dispatch) => {
    try {
      dispatch({ type: INSURANCE_POST_REQUEST });

      const { data } = await axios.post(
        `https://motor-tax.herokuapp.com/api/insurance-agents/`,
        company_details
      );

      dispatch({ type: INSURANCE_POST_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: INSURANCE_POST_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getAllInsuranceCompanies = () => async (dispatch) => {
  try {
    dispatch({ type: INSURANCE_FETCH_REQUEST });

    const {
      data: { allInsuranceAgents },
    } = await axios.get(
      `https://motor-tax.herokuapp.com/api/insurance-agents/`
    );

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

export const getLatestInsuranceCompanies = () => async (dispatch) => {
  try {
    dispatch({ type: INSURANCE_LATEST_FETCH_REQUEST });

    const {
      data: { latestInsuranceAgents },
    } = await axios.get(
      `https://motor-tax.herokuapp.com/api/insurance-agents/latest`
    );

    dispatch({
      type: INSURANCE_LATEST_FETCH_SUCCESS,
      payload: latestInsuranceAgents,
    });
  } catch (error) {
    dispatch({
      type: INSURANCE_LATEST_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const fetchInsuranceReportDetails = (bodydata) => async (dispatch) => {
  try {
    dispatch({ type: INSURANCE_REPORT_FETCH_REQUEST });

    const {
      data: { insuranceReports },
    } = await axios.post(
      `http://localhost:3000/api/insurance-report/`,
      bodydata
    );

    dispatch({
      type: INSURANCE_REPORT_FETCH_SUCCESS,
      payload: insuranceReports,
    });

    localStorage.setItem('insurance_report', JSON.stringify(insuranceReports));
  } catch (error) {
    dispatch({
      type: INSURANCE_REPORT_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
