import React from 'react';
import { useSelector } from 'react-redux';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

import { FaFilePdf } from 'react-icons/fa';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const PaymentSuccessScreen = () => {
  const record = useSelector((state) => state.taxpayer);
  const { taxpayerinfo } = record;

  const downloadClickListener = () => {
    console.log('hello');
    var docDefinition = {
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
            `Tax Amount: NPR.${taxpayerinfo.taxAmount}`,
            `Tax overdue period: ${taxpayerinfo.taxOverdue}`,
            `Penalty on overdue: NPR.${taxpayerinfo.penaltyOnOverdue}`,
            `Polluting vehicle charge: NPR.${taxpayerinfo.pollutingCharge}`,
            `Total amount to pay: NPR.${
              taxpayerinfo.taxAmount +
              taxpayerinfo.penaltyOnOverdue +
              taxpayerinfo.pollutingCharge
            }`,
          ],
        },
      ],
    };

    pdfMake.createPdf(docDefinition).download();
  };

  return (
    <div className='payment-success'>
      <h1 className='heading-1'>Payment successful</h1>
      <p>Thank you!</p>
      <p className='payment-msg'>
        Your payment has been successfully captured.
      </p>
      <p className='payment-review'>Please rate your experience below.</p>

      <div onClick={downloadClickListener} className='download-statement-box'>
        <FaFilePdf className='pdf-icon' />
        <p className='download-statement'>Download statement</p>
      </div>
    </div>
  );
};

export default PaymentSuccessScreen;
