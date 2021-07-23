import axios from 'axios';
import {
  ADMIN_DOCS_FETCH_FAIL,
  ADMIN_DOCS_FETCH_REQUEST,
  ADMIN_DOCS_FETCH_SUCCESS,
  ADMIN_DOCS_UPDATE_FAIL,
  ADMIN_DOCS_UPDATE_REQUEST,
  ADMIN_DOCS_UPDATE_SUCCESS,
} from '../constants/adminDocsConstants';

export const getAllAdminDocs = () => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_DOCS_FETCH_REQUEST });

    const {
      data: { allTaxRecordDocs },
    } = await axios.get('https://motor-tax.herokuapp.com/api/taxpayer/');

    dispatch({ type: ADMIN_DOCS_FETCH_SUCCESS, payload: allTaxRecordDocs });
  } catch (error) {
    dispatch({
      type: ADMIN_DOCS_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminUpdatesTaxpayer = (taxpayer) => async (dispatch) => {
  try {
    dispatch({ type: ADMIN_DOCS_UPDATE_REQUEST });

    const { data } = await axios.put(
      `https://motor-tax.herokuapp.com/api/taxpayer/${taxpayer._id}`,
      taxpayer
    );

    dispatch({ type: ADMIN_DOCS_UPDATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ADMIN_DOCS_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
