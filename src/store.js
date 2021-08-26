import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import {
  taxpayerDeleteReducer,
  taxpayerLoginReducer,
  taxpayerReducer,
  taxpayerSignupReducer,
} from './reducers/taxpayerReducers';
import {
  newInsuranceCompanyReducers,
  insuranceReducers,
  insuranceReportReducer,
  latestInsuranceReducers,
} from './reducers/insuranceReducers';

import {
  adminDocsReducer,
  adminUpdatesTaxpayerReducer,
} from './reducers/adminDocsReducers';

import { getTaxDetailsReducer } from './reducers/taxDetailReducers';
import { getFAQsReducer } from './reducers/faqsReducers';
import {
  adminDeleteReducer,
  adminLoginReducer,
  adminSignupReducer,
} from './reducers/adminReducers';
import { taxRecordData } from './reducers/taxRecordReducers';
import { savedRatingReducers } from './reducers/ratingReducers';
import {
  getFeedbackReducers,
  savedFeedbackReducers,
} from './reducers/feedbackReducers';

const reducer = combineReducers({
  taxpayer: taxpayerReducer,
  taxpayerSignup: taxpayerSignupReducer,
  taxpayerLogin: taxpayerLoginReducer,
  taxpayerDelete: taxpayerDeleteReducer,
  newInsuranceCompany: newInsuranceCompanyReducers,
  insurance: insuranceReducers,
  latestInsurance: latestInsuranceReducers,
  insuranceReport: insuranceReportReducer,
  adminDocs: adminDocsReducer,
  adminUpdatesTaxpayer: adminUpdatesTaxpayerReducer,
  getTaxDetails: getTaxDetailsReducer,
  getFAQs: getFAQsReducer,
  adminSignup: adminSignupReducer,
  adminLogin: adminLoginReducer,
  adminDelete: adminDeleteReducer,
  taxRecord: taxRecordData,
  savedRating: savedRatingReducers,
  savedFeedback: savedFeedbackReducers,
  getFeedback: getFeedbackReducers,
});

const taxpayerProfileInfoFromStorage = localStorage.getItem(
  'taxpayerprofileinfo'
)
  ? JSON.parse(localStorage.getItem('taxpayerprofileinfo'))
  : {};

const adminProfileInfoFromStorage = localStorage.getItem('adminprofileinfo')
  ? JSON.parse(localStorage.getItem('adminprofileinfo'))
  : {};

const initialState = {
  taxpayer: {
    taxpayerinfo: {
      taxpayer_name: 'BDD Tester',
      bluebook_number: 'BDD',
      vehicle_number: 'BDD123',
      type: 'Bike',
      engine_cc: '300',
      province: 'Bagmati',
      lastTaxPaidOn: '2021/02/15',
      taxAmount: 32000,
      taxOverdue: '1',
      penaltyOnOverdue: 5120,
      pollutingCharge: 500,
      recordId: '61260a97ea98d453549ae62d',
    },
  },
  taxpayerSignup: {
    signupResponse: {},
  },
  taxpayerLogin: { loginResponse: taxpayerProfileInfoFromStorage },
  newInsuranceCompany: {
    insuranceCompanies: {
      success: false,
    },
  },
  taxpayerDelete: { deleteResponse: {} },
  insurance: {
    insuranceCompanies: [],
  },
  latestInsurance: {
    insuranceCompanies: [],
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
    getTaxDetails: {
      taxRates: [],
    },
    getFAQs: {
      faqs: [],
    },
  },
  adminSignup: {
    signupResponse: {},
  },
  adminLogin: { loginResponse: adminProfileInfoFromStorage },
  adminDelete: { deleteResponse: {} },
  taxRecord: { taxRecords: [] },
  savedRating: { message: '' },
  savedFeedback: { message: '' },
  getFeedback: { feedback: [] },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
