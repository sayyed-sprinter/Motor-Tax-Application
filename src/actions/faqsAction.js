import axios from 'axios';
import {
  FAQS_FETCH_FAIL,
  FAQS_FETCH_REQUEST,
  FAQS_FETCH_SUCCESS,
} from '../constants/faqsConstant';

export const getFAQs = () => async (dispatch) => {
  try {
    dispatch({ type: FAQS_FETCH_REQUEST });

    const {
      data: { FAQs },
    } = await axios.get('https://motor-tax.herokuapp.com/api/faqs');

    dispatch({ type: FAQS_FETCH_SUCCESS, payload: FAQs });
  } catch (error) {
    dispatch({
      type: FAQS_FETCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
