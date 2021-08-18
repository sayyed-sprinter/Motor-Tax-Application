import axios from 'axios';
import {
  TAX_RECORD_FETCH_FAIL,
  TAX_RECORD_FETCH_REQUEST,
  TAX_RECORD_FETCH_SUCCESS,
} from '../constants/taxRecordConstants';

export const getTaxRecords = (bluebookNum) => async (dispatch) => {
  try {
    dispatch({ type: TAX_RECORD_FETCH_REQUEST });

    const {
      data: { taxpayerHistory },
    } = await axios.get(
      `https://motor-tax.herokuapp.com/api/tax-record/${bluebookNum}`
    );

    dispatch({ type: TAX_RECORD_FETCH_SUCCESS, payload: taxpayerHistory });
  } catch (error) {
    dispatch({
      type: TAX_RECORD_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
