import React from 'react';
import { useSelector } from 'react-redux';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { FaFilePdf } from 'react-icons/fa';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PaymentSuccess = ({ type }) => {
  const record = useSelector((state) => state.taxpayer);
  const { taxpayerinfo } = record;

  const insurance_info = useSelector((state) => state.insuranceReport);
  const { report_details } = insurance_info;

  const downloadClickListener = () => {
    var taxDocDefinition = {
      content: [
        { text: `${taxpayerinfo.taxpayer_name}`, style: 'header' },
        { text: '\n\nVehicle Details', style: 'header' },
        {
          ul: [
            `Bluebook Number: ${taxpayerinfo.bluebook_number}`,
            `Vehicle Number: ${taxpayerinfo.vehicle_number}`,
            `Vehicle Type: ${taxpayerinfo.type}`,
            `Engine CC: ${taxpayerinfo.engine_cc}`,
            `Province: ${taxpayerinfo.province}`,
          ],
        },
        { text: '\nTax Charges', style: 'header' },
        {
          ul: [
            `Tax Amount: NPR.${taxpayerinfo.taxAmount}/-`,
            `Tax overdue period: ${taxpayerinfo.taxOverdue}/-`,
            `Penalty on overdue: NPR.${taxpayerinfo.penaltyOnOverdue}/-`,
            `Polluting vehicle charge: NPR.${taxpayerinfo.pollutingCharge}/-`,
            `Total amount to pay: NPR.${
              taxpayerinfo.taxAmount +
              taxpayerinfo.penaltyOnOverdue +
              taxpayerinfo.pollutingCharge
            }/-`,
          ],
        },
      ],
    };

    var insuranceDocDefinition = {
      content: [
        { text: `${report_details.insurance_company}`, style: 'header' },
        { text: '\n\nPolicy Details', style: 'header' },
        {
          ul: [
            `Insurance Type: ${report_details.insurance_type}`,
            `Insured Date: ${report_details.createdAt.split('T')[0]}`,
            `Insurance Amount: NPR. ${report_details.insuranceAmount}/-`,
            `Policy Number: ${report_details._id}`,
            `Expires on : ${report_details.insuranceExpiryDate.split('T')[0]}`,
            `Bluebook Number : ${report_details.bluebook_number}`,
          ],
        },
        { text: '\nCoverage To', style: 'header' },
        {
          ul: [
            `Vehicle Type and CC: ${report_details.type} - ${report_details.engine_cc}CC`,
            `Driver: NPR.${report_details.driver}/-`,
            `Conductor: NPR.${report_details.conductor}/-`,
            `Helper: NPR.${report_details.helper}/-`,
            `Passenger: NPR.${report_details.passenger}/-`,
            `Medical expenses: NPR.${report_details.medical_expenses}/- (per tax)`,
          ],
        },
      ],
    };

    if (type === 'tax') {
      pdfMake.createPdf(taxDocDefinition).download();
    }
    if (type === 'insurance') {
      pdfMake.createPdf(insuranceDocDefinition).download();
    }
  };

  return (
    <div className='payment-success' id='payment-success-div'>
      <h1 className='heading-1'>Payment successful</h1>
      <p>Thank you!</p>
      <p className='payment-msg'>
        Your payment has been successfully captured.
      </p>
      <p className='payment-review'>Please rate your experience below.</p>

      <div
        onClick={downloadClickListener}
        className='download-statement-box'
        id='download-statement-btn'
      >
        <FaFilePdf className='pdf-icon' />
        <p className='download-statement'>Download statement</p>
      </div>
    </div>
  );
};
export default PaymentSuccess;
