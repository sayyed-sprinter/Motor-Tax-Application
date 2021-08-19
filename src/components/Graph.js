import React, { useEffect } from 'react';
import { Line, PolarArea } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { getTaxRecords } from '../actions/taxRecordAction';

import Loader from '../components/Loader';
import MessageBar from '../components/MessageBar';
import PaymentHistory from './PaymentHistory';

const Graph = ({ bluebookNumber }) => {
  const dispatch = useDispatch();
  let taxPaid = 0;
  let penaltyChargesPaid = 0;
  let pollutingChargesPaid = 0;

  const taxDataFromStore = useSelector((state) => state.taxRecord);
  const { loading, error, taxRecords } = taxDataFromStore;

  useEffect(() => {
    dispatch(getTaxRecords(bluebookNumber));
  }, [dispatch, bluebookNumber]);

  // FETCHED LABELS FROM DATABASE ENTRIES
  const recordLabels =
    taxRecords !== undefined ? taxRecords.map((record) => record.paidYear) : [];

  // FETCHED TAX PAID OVER THE YEARS FROM DATABASE ENTRIES
  const recordData =
    taxRecords !== undefined
      ? taxRecords.map(
          (record) =>
            record.taxAmount + record.penaltyOnOverdue + record.pollutingCharge
        )
      : [];

  // CONFIGURATION FOR LINE CHART
  const LineData = {
    labels: recordLabels,
    datasets: [
      {
        label: 'Tax paid over the years',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(254, 60, 108,1)',
        borderColor: 'rgba(254, 60, 108,1)',
        borderWidth: 5,
        data: recordData,
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    min: 0,
  };

  // FETCHED TAX AMOUNT, PENALTY CHARGES AND POLLUTION CHARGES FROM DATABASE ENTRIES
  if (taxRecords !== undefined) {
    taxRecords.forEach((record) => {
      taxPaid += record.taxAmount;
      penaltyChargesPaid += record.penaltyOnOverdue;
      pollutingChargesPaid += record.pollutingCharge;
    });
  }

  // CONFIGURATION FOR POLAR CHART
  const polarData = {
    labels: [
      'motor tax paid',
      'penalty charges paid',
      'pollution charges paid',
    ],
    datasets: [
      {
        label: '# of Votes',
        data: [taxPaid, penaltyChargesPaid, pollutingChargesPaid],
        backgroundColor: [
          'rgba(254, 60, 108,0.5)',
          'rgb(250, 116, 91, 0.5)',
          'rgba(255, 206, 86, 0.5)',
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <section
        className='graph-container'
        id={`taxpayer-graph-${bluebookNumber}`}
      >
        {loading ? (
          <Loader />
        ) : error ? (
          <MessageBar error={true} text={error} id={'graph-error'} />
        ) : (
          taxRecords !== undefined && (
            <>
              <section className='line-chart'>
                <Line data={LineData} options={options} />
              </section>
              <section className='polar-chart'>
                <PolarArea data={polarData} />
              </section>
            </>
          )
        )}
      </section>
      {loading ? (
        <Loader />
      ) : error ? (
        <MessageBar error={true} text={error} id={'graph-error'} />
      ) : (
        taxRecords !== undefined && <PaymentHistory taxRecords={taxRecords} />
      )}
    </>
  );
};

export default Graph;
