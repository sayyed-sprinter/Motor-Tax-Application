import React from 'react';

import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { VscLoading } from 'react-icons/vsc';
import { TiArrowBack } from 'react-icons/ti';

import Button from '../components/Button';
import List from '../components/List';

import { TAXPAYER_FETCH_RESET } from '../constants/taxpayerConstants';

const InsuranceSummaryScreen = ({ history }) => {
  const record = useSelector((state) => state.taxpayer);
  const { loading, error, taxpayerinfo } = record;

  const dispatch = useDispatch();

  const goBackHandler = () => {
    dispatch({ type: TAXPAYER_FETCH_RESET });
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
            <div className='payment-details-box' id='tax-summary-screen'>
              <h1 className='heading-1'>Payment details</h1>
              <div className='btn btn--go-back' onClick={goBackHandler}>
                <TiArrowBack className='go-back' />
              </div>
              <div className='payment-details'>
                <div className='taxpayer-details'>
                  <h2 className='taxpayer'>Company Name</h2>
                </div>
                <List
                  title='Policy Details'
                  key1='Insurance Type'
                  value1='Third-party Insurance'
                  key2='Insured Date'
                  value2='13/07/2021'
                  key3='Insurance amount'
                  value3='3500'
                  key4='Policy Number'
                  value4='13S07K2021'
                  key5='Expires on'
                  value5='12/07/2022'
                  key6='Bluebook Number'
                  value6='25455DD545'
                />
                <List
                  title='Coverage to'
                  key1='Vehicle type and CC'
                  value1='Bike - 250 cc'
                  key2='Driver'
                  value2='Rs. 500,000/-'
                  key3='Conductor:'
                  value3='Rs. 500,000/-'
                  key4='Helper'
                  value4='Rs. 500,000/-'
                  key5='Passenger'
                  value5='Rs. 500,000/-'
                  key6='Medical Expense'
                  value6='Rs. 300,000/- (per pax)'
                />
              </div>

              <Button
                text='pay & download receipt'
                classes='btn btn--pay btn-xlg'
              />
            </div>
          </>
        )}
      </>
    </>
  );
};

export default InsuranceSummaryScreen;
