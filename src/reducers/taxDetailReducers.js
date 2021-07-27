import {
  TAX_DETAILS_FETCH_FAIL,
  TAX_DETAILS_FETCH_REQUEST,
  TAX_DETAILS_FETCH_SUCCESS,
} from '../constants/taxDetailsConstants';

export const getTaxDetailsReducer = (state = { taxDetails: [] }, action) => {
  switch (action.type) {
    case TAX_DETAILS_FETCH_REQUEST:
      return { loading: true };
    case TAX_DETAILS_FETCH_SUCCESS:
      return { loading: false, taxDetails: action.payload };
    case TAX_DETAILS_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
