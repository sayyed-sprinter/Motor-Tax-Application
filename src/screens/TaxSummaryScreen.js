import React, { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { TiArrowBack } from 'react-icons/ti';

import Button from '../components/Button';
import List from '../components/List';

import { TAXPAYER_FETCH_RESET } from '../constants/taxpayerConstants';
import PaymentSuccess from '../components/PaymentSuccess';
import Loader from '../components/Loader';
import MessageBar from '../components/MessageBar';

const TaxSummaryScreen = ({ history }) => {
  const record = useSelector((state) => state.taxpayer);
  const { loading, error, taxpayerinfo } = record;

  const [showButton, setShowButton] = useState(true);

  const dispatch = useDispatch();

  const goBackHandler = () => {
    dispatch({ type: TAXPAYER_FETCH_RESET });
    history.push({ pathname: '/', state: { insurancePaid: true } });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <MessageBar error={true} text={error} />
      ) : (
        <>
          <div className='payment-details-box' id='tax-summary-screen'>
            <h1 className='heading-1'>Payment details</h1>
            <div className='btn btn--go-back' onClick={goBackHandler}>
              <TiArrowBack className='go-back' />
            </div>
            <div className='payment-details'>
              <div className='taxpayer-details'>
                <h2 className='taxpayer'>{taxpayerinfo.taxpayer_name}</h2>
                {/* <p className='tab-verified btn--success' id='taxpayer-verified'>
                  Verified
                </p> */}
              </div>
              <List
                title='Vehicle details'
                key1='Bluebook Number'
                value1={taxpayerinfo.bluebook_number}
                key2='Vehicle Number'
                value2={taxpayerinfo.vehicle_number}
                key3='Vehicle Type'
                value3={taxpayerinfo.type}
                key4='Engine Displacement Measure'
                value4={taxpayerinfo.engine_cc}
                key5='Province'
                value5={taxpayerinfo.province}
                key6='Last tax paid on'
                value6={`${taxpayerinfo.lastTaxPaidOn}`}
              />
              <List
                title='Tax charges'
                key1='Tax amount'
                value1={`NPR. ${taxpayerinfo.taxAmount}/-`}
                key2='Tax overdue period'
                value2={`${taxpayerinfo.taxOverdue} ${
                  taxpayerinfo.taxOverdue > 1 ? 'years' : 'year'
                }`}
                key3='Penalty on overdue'
                value3={`NPR. ${taxpayerinfo.penaltyOnOverdue}/-`}
                key4='Polluting vehicle charge'
                value4={`NPR. ${taxpayerinfo.pollutingCharge}/-`}
                key5='Total amount to pay'
                value5={`NPR. ${
                  taxpayerinfo.taxAmount +
                  taxpayerinfo.penaltyOnOverdue +
                  taxpayerinfo.pollutingCharge
                }/-`}
              />
            </div>

            {showButton ? (
              taxpayerinfo.taxAmount > 0 ? (
                <p
                  className='btn btn--pay btn--primary'
                  id='btn-pay-tax'
                  onClick={() => setShowButton(false)}
                >
                  Pay
                </p>
              ) : (
                <Button
                  text='Nothing to pay'
                  classes='btn btn--pay btn-lg'
                  disabled
                />
              )
            ) : (
              <PaymentSuccess type='tax' />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default TaxSummaryScreen;
