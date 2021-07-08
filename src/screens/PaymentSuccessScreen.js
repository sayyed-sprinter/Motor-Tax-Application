import React from 'react';

const PaymentSuccessScreen = () => {
  return (
    <div className='payment-success'>
      <h1 className='heading-1'>Payment successful</h1>
      <p>Thank you!</p>
      <p className='payment-msg'>
        Your payment has been successfully captured.
      </p>
      <p className='payment-review'>Please rate your experience below.</p>
    </div>
  );
};

export default PaymentSuccessScreen;
