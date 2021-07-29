import {
  FAQS_FETCH_FAIL,
  FAQS_FETCH_REQUEST,
  FAQS_FETCH_SUCCESS,
} from '../constants/faqsConstant';

export const getFAQsReducer = (state = { faqs: [] }, action) => {
  switch (action.type) {
    case FAQS_FETCH_REQUEST:
      return { loading: true };
    case FAQS_FETCH_SUCCESS:
      return { loading: false, faqs: action.payload };
    case FAQS_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return { faqs: [] };
  }
};
