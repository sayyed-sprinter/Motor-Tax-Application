import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { taxpayerReducer } from './reducers/taxpayerReducers';
import {
  insuranceReducers,
  insuranceReportReducer,
} from './reducers/insuranceReducers';

import { adminDocsReducer } from './reducers/adminDocsReducers';

const reducer = combineReducers({
  taxpayer: taxpayerReducer,
  insurance: insuranceReducers,
  insuranceReport: insuranceReportReducer,
  adminDocs: adminDocsReducer,
});

// const taxpayerFromStorage = localStorage.getItem('taxpayerinfo')
//   ? JSON.parse(localStorage.getItem('taxpayerinfo'))
//   : {};

const initialState = {
  taxpayer: {
    taxpayerinfo: {
      bluebook_number: '...',
      vehicle_number: '...',
      engine_cc: '...',
      province: '...',
      lastTaxPaidOn: '...',
      taxAmount: 2,
      taxOverdue: '3',
      penaltyOnOverdue: 2,
      pollutingCharge: 0,
    },
  },
  insuranceReport: {
    report_details: {
      death: '0',
      disabled: '0',
      injured: '0',
      medical_expenses: '0',
      attendant_expenses: '0',
      _id: '123',
      taxpayer_name: 'Anonymous',
      insurance_company: '...',
      bluebook_number: '0',
      vehicle_number: '0',
      insuranceExpiryDate: '0000-00-00',
      engine_cc: 0,
      type: '...',
      insurance_type: '...',
      premium: 0,
      createdAt: '0000-00-00',
    },
    insurance: {
      insuranceCompanies: [],
    },
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
