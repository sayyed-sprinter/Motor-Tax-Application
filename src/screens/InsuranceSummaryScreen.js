import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { VscLoading } from 'react-icons/vsc';
import { TiArrowBack } from 'react-icons/ti';

import List from '../components/List';

import { INSURANCE_REPORT_FETCH_RESET } from '../constants/insuranceConstants';
//import PaymentSuccess from '../components/PaymentSuccess';

const InsuranceSummaryScreen = ({ history }) => {
  const record = useSelector((state) => state.insuranceReport);
  const { loading, error, report_details } = record;

  //const [showButton, setShowButton] = useState(true);

  const dispatch = useDispatch();

  const goBackHandler = () => {
    dispatch({ type: INSURANCE_REPORT_FETCH_RESET });
    history.push({ pathname: '/', state: { insurancePaid: true } });
  };

  return (
    <>
      <>
        {loading ? (
          <VscLoading className='loader screen-loader' />
        ) : error ? (
          <p>Error occured: {error}</p>
        ) : (
          <>
            <div className='payment-details-box' id='insurance-summary-screen'>
              <h1 className='heading-1'>Insurance policy details</h1>
              <div className='btn btn--go-back' onClick={goBackHandler}>
                <TiArrowBack className='go-back' />
              </div>
              <div className='payment-details'>
                <div className='taxpayer-details'>
                  <h2 className='taxpayer'>
                    {report_details.insurance_company}
                  </h2>
                </div>
                <List
                  title='Policy Details'
                  key1='Insurance Type'
                  value1={report_details.insurance_type}
                  key2='Insured Date'
                  value2={report_details.createdAt.split('T')[0]}
                  key3='Insurance amount'
                  value3={report_details.insuranceAmount}
                  key4='Policy Number'
                  value4={report_details._id}
                  key5='Expires on'
                  value5={report_details.insuranceExpiryDate.split('T')[0]}
                  key6='Bluebook Number'
                  value6={report_details.bluebook_number}
                />
                <List
                  title='Coverage to'
                  key1='Vehicle type and CC'
                  value1={`${report_details.type} - ${report_details.engine_cc}CC`}
                  key2='Driver'
                  value2={`NPR.${report_details.driver}/-`}
                  key3='Conductor:'
                  value3={`NPR.${report_details.conductor}/-`}
                  key4='Helper'
                  value4={`NPR.${report_details.helper}/-`}
                  key5='Passenger'
                  value5={`NPR.${report_details.passenger}/-`}
                  key6='Medical Expense'
                  value6={`NPR.${report_details.medical_expenses}/- (per tax)`}
                />
              </div>

              {/* {showButton ? ( */}
              <p
                className='btn btn--pay btn--primary'
                id='btn-pay-here'
                //onClick={() => setShowButton(false)}
              >
                Pay here
              </p>
              {/*) : (
                <PaymentSuccess type='insurance' />
               )} */}
            </div>
          </>
        )}
      </>
    </>
  );
};

export default InsuranceSummaryScreen;
