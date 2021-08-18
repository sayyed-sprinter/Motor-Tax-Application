import {
  TAX_RECORD_FETCH_FAIL,
  TAX_RECORD_FETCH_REQUEST,
  TAX_RECORD_FETCH_SUCCESS,
} from '../constants/taxRecordConstants';

export const taxRecordData = (state = { taxRecords: [] }, action) => {
  switch (action.type) {
    case TAX_RECORD_FETCH_REQUEST:
      return { loading: true };
    case TAX_RECORD_FETCH_SUCCESS:
      return { loading: false, taxRecords: action.payload };
    case TAX_RECORD_FETCH_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
