import {
  INSURANCE_FETCH_FAIL,
  INSURANCE_FETCH_REQUEST,
  INSURANCE_FETCH_RESET,
  INSURANCE_FETCH_SUCCESS,
} from '../constants/insuranceConstants';

export const insuranceReducers = (
  state = { insuranceCompanies: [] },
  action
) => {
  switch (action.type) {
    case INSURANCE_FETCH_REQUEST:
      return { loading: true };
    case INSURANCE_FETCH_SUCCESS:
      return { loading: false, insuranceCompanies: action.payload };
    case INSURANCE_FETCH_FAIL:
      return { loading: false, error: action.payload };
    case INSURANCE_FETCH_RESET:
      return { insuranceCompanies: [] };
    default:
      return state;
  }
};
