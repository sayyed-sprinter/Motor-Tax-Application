import React from 'react';

const TwoColList = ({ title1, title2, item, VehicleType }) => {
  return (
    <section className='two-col-list'>
      {VehicleType && (
        <h2 className='heading-2 col-heading-2'>{VehicleType}</h2>
      )}
      <section className='col-title-container'>
        {title1 && <h4 className='main-heading col-list-heading'>{title1}</h4>}
        {title2 && <h4 className='main-heading col-list-heading'>{title2}</h4>}
      </section>

      {item.tax_rates.map((x, index) => (
        <section className='col-list-detail' key={index}>
          <p className='col-list-info light'>{x.engine_cc}</p>
          <p className='col-list-value dark'>NPR.&nbsp;{x.rate}/-</p>
        </section>
      ))}
    </section>
  );
};

export default TwoColList;
