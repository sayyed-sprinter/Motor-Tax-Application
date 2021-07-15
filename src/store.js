import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { taxpayerReducer } from './reducers/taxpayerReducers';
import {
  insuranceReducers,
  insuranceReportReducer,
} from './reducers/insuranceReducers';

const reducer = combineReducers({
  taxpayer: taxpayerReducer,
  insurance: insuranceReducers,
  insuranceReport: insuranceReportReducer,
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
      bluebook_number: '...',
      insuranceAmount: '...',
      vehicle_number: '...',
      engine_cc: '...',
      insurance_type: 'Third party',
      taxpayer_name: '...',
      type: '...',
      insuranceExpiryDate: '...',
      insurance_company: '...',
      driver: '500000',
      conductor: '500000',
      helper: '500000',
      passenger: '500000',
      medical_expenses: '300000',
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
