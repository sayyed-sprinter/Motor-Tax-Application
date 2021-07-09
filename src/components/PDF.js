import React from 'react';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

var docDefinition = () => {
  return {
    content: [
      { text: 'Vehicle Details', style: 'header' },
      {
        ul: [
          `Bluebook Number: `,
          `Vehicle Number: `,
          `Vehicle Type:`,
          `Engine CC: `,
          `Province: `,
        ],
      },
      { text: 'Tax Charges', style: 'header' },
      {
        ul: [
          `Tax Amount: `,
          `Tax overdue period: `,
          `Penalty on overdue:`,
          `Polluting vehicle charge: `,
          `Total amount to pay: `,
        ],
      },
    ],
  };
};

pdfMake.fonts = {
  Roboto: {
    normal:
      'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Regular.ttf',
    bold: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Medium.ttf',
    italics:
      'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-Italic.ttf',
    bolditalics:
      'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.66/fonts/Roboto/Roboto-MediumItalic.ttf',
  },
};

pdfMake.createPdf(docDefinition, null, fonts).open;

export default PDF;
