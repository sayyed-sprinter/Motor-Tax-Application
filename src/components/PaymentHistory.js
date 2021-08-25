import React from 'react';
import { IoCalendarClearOutline } from 'react-icons/io5';

const PaymentHistory = ({ taxRecords }) => {
  let grandTotal = 0;
  taxRecords.forEach((record) => {
    grandTotal +=
      record.taxAmount + record.penaltyOnOverdue + record.pollutingCharge;
  });

  return (
    <section
      className='payment-history-container'
      id='payment-history-container'
    >
      <h4 className='payment-history-title'>Payment History</h4>
      <section className='payment-history-headings'>
        <p>Year</p>
        <p>Details</p>
        <p>Total</p>
      </section>

      <section>
        {taxRecords.map((record, index) => (
          <section className='payment-histories' key={index}>
            <section className='payment-year'>
              <IoCalendarClearOutline className='history-calendar-icon' />
              <p>{record.paidYear}</p>
            </section>
            <section className='payment-history'>
              <p className='tax-amount'>
                <strong>Tax Amount</strong>
                <span>{record.taxAmount}</span>
              </p>
              <p className='penalty-years'>
                <strong>Overdue For</strong>
                {record.taxOverdue > 0 ? (
                  <span className='error'>
                    {record.taxOverdue}{' '}
                    {record.taxOverdue > 1 ? 'Years' : 'Year'}
                  </span>
                ) : (
                  <span>
                    {record.taxOverdue}{' '}
                    {record.taxOverdue > 0
                      ? record.taxOverdue > 1
                        ? 'Years'
                        : 'Year'
                      : ''}
                  </span>
                )}
              </p>
              <p className='penalty-charge'>
                <strong>Penalty Charge</strong>
                {record.penaltyOnOverdue > 0 ? (
                  <span className='error'>{record.penaltyOnOverdue}</span>
                ) : (
                  <span>{record.penaltyOnOverdue}</span>
                )}
              </p>
              <p className='pollution-charge'>
                <strong>Pollution Charge</strong>
                {record.pollutingCharge > 0 ? (
                  <span className='error'>{record.pollutingCharge}</span>
                ) : (
                  <span>{record.pollutingCharge}</span>
                )}
              </p>

              <p className='bluebook-doc-file'>
                <strong>Bluebook</strong>

                {record.docs.map((doc, i) => (
                  <span key={i}>
                    {doc.bluebook_file_path === ''
                      ? 'No file attached'
                      : doc.bluebook_file_path}
                  </span>
                ))}
              </p>
              <p className='citizen-doc-file'>
                <strong>Citizenship</strong>

                {record.docs.map((doc, i) => (
                  <span key={i}>
                    {doc.citizenship_file_path === ''
                      ? 'No file attached'
                      : doc.citizenship_file_path}
                  </span>
                ))}
              </p>
              <p className='policy-doc-file'>
                <strong>Policy</strong>

                {record.docs.map((doc, i) => (
                  <span key={i}>
                    {doc.policy_file_path === ''
                      ? 'No file attached'
                      : doc.policy_file_path}
                  </span>
                ))}
              </p>
              <p className='documents--verified'>
                <strong>Documents verified</strong>
                {record.adminComment !== '' && !record.verified && (
                  <span className='error'>{record.adminComment}</span>
                )}
                {record.adminComment === '' && record.verified && (
                  <span className='success'>Verified</span>
                )}
              </p>
            </section>
            <section className='payment-total'>
              <p className='total-mob'>Total</p>
              <p>
                {record.taxAmount +
                  record.penaltyOnOverdue +
                  record.pollutingCharge}
              </p>
            </section>
          </section>
        ))}
      </section>
      <section className='payment-grand-total'>
        <p className='grand-total'>Grand total</p>
        <p className='grand-total-amount'>{grandTotal}</p>
      </section>
    </section>
  );
};

export default PaymentHistory;
