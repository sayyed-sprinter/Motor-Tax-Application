import axios from 'axios';
import {
  FEEDBACK_FETCH_FAIL,
  FEEDBACK_FETCH_REQUEST,
  FEEDBACK_FETCH_SUCCESS,
  FEEDBACK_POST_FAIL,
  FEEDBACK_POST_REQUEST,
  FEEDBACK_POST_SUCCESS,
} from '../constants/feedbackConstants';

export const saveFeedback = (bodyData) => async (dispatch) => {
  try {
    dispatch({ type: FEEDBACK_POST_REQUEST });

    const {
      data: { message },
    } = await axios.post(
      `https://motor-tax.herokuapp.com/api/tax-record/feedback/${bodyData.id}`,
      bodyData
    );
    dispatch({ type: FEEDBACK_POST_SUCCESS, payload: message });
  } catch (error) {
    dispatch({
      type: FEEDBACK_POST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getFeedback = () => async (dispatch) => {
  try {
    dispatch({ type: FEEDBACK_FETCH_REQUEST });

    const {
      data: { feedback },
    } = await axios.get(`https://motor-tax.herokuapp.com/api/tax-record/`);
    dispatch({ type: FEEDBACK_FETCH_SUCCESS, payload: feedback });
  } catch (error) {
    dispatch({
      type: FEEDBACK_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
