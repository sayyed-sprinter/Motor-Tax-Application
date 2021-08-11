import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { TiArrowBack } from 'react-icons/ti';

import List from '../components/List';

import { INSURANCE_REPORT_FETCH_RESET } from '../constants/insuranceConstants';
import PaymentSuccess from '../components/PaymentSuccess';
import MessageBar from '../components/MessageBar';
import Loader from '../components/Loader';

const InsuranceSummaryScreen = ({ history }) => {
  const record = useSelector((state) => state.insuranceReport);
  const { loading, error, report_details } = record;

  const [showButton, setShowButton] = useState(true);

  const dispatch = useDispatch();

  const goBackHandler = () => {
    dispatch({ type: INSURANCE_REPORT_FETCH_RESET });
    history.push({
      pathname: '/',
      state: {
        insurancePaid: true,
        policy_number: report_details._id,
        bluebook_number: report_details.bluebook_number,
        vehicle_number: report_details.vehicle_number,
        engine_cc: report_details.engine_cc,
      },
    });
  };

  return (
    <section className='summary-container'>
      {loading ? (
        <Loader />
      ) : error ? (
        <MessageBar error={true} text={error} />
      ) : (
        <>
          <div className='payment-details-box' id='insurance-summary-screen'>
            <h1 className='heading-1'>{report_details.insurance_company}</h1>
            <div className='btn btn--go-back' onClick={goBackHandler}>
              <TiArrowBack className='go-back' />
            </div>
            <div className='payment-details'>
              <div className='taxpayer-details'>
                <h2 className='taxpayer'>{report_details.taxpayer_name}</h2>
              </div>
              <List
                title='Policy Details'
                key1='Insurance Type'
                value1={report_details.insurance_type}
                key2='Insured Date'
                value2={report_details.createdAt.split('T')[0]}
                key3='Premium'
                value3={report_details.premium}
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
                value1={`${report_details.type.toUpperCase()} - ${
                  report_details.engine_cc
                } CC`}
                key2='Death'
                value2={`NPR.${report_details.death}/-`}
                key3='Disabled:'
                value3={`NPR.${report_details.disabled}/-`}
                key4='Injured'
                value4={`NPR.${report_details.injured}/-`}
                key5='Medical expenses'
                value5={`${report_details.medical_expenses}`}
                key6='Attendant expenses'
                value6={`NPR.${report_details.attendant_expenses}`}
              />
            </div>

            {showButton ? (
              !report_details.insurancePaid ? (
                <p
                  className='btn btn--pay btn--primary'
                  id='btn-pay-insurance'
                  onClick={() => setShowButton(false)}
                >
                  Pay
                </p>
              ) : (
                <MessageBar
                  className='success'
                  text='Premium paid already please go back to pay tax'
                />
              )
            ) : (
              <PaymentSuccess type='insurance' />
            )}
          </div>
        </>
      )}
    </section>
  );
};

export default InsuranceSummaryScreen;
