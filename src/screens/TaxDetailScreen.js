import React from 'react';
import List from '../components/List';

const TaxDetailScreen = () => {
  return (
    <>
      <section className='tax-details-container' id='tax-details-container'>
        <h1 className='heading-1'>Tax Details</h1>
        <section className='tax-details'>
          <h3 className='heading-2 tax-details-type'>Car</h3>
          <List
            title='CC - Amount'
            key1='Up to 1000 (CC)'
            value1='NPR. 21000/-'
            key2='1000 - 1500 (CC)'
            value2='NPR. 23000/-'
            key3='1500 - 2000 (CC)'
            value3='NPR. 25000/-'
            key4='2000 - 2500 (CC)'
            value4='NPR. 38000/-'
            key5='2500 - 2900 (CC)'
            value5='NPR. 45000/-'
            key6='More than 2900 (CC)'
            value6='NPR. 65000/-'
          />
        </section>
        <section className='tax-details'>
          <h3 className='heading-2 tax-details-type'>Motorcycle</h3>
          <List
            title='CC - Amount'
            key1='Less than 125 (CC)'
            value1='NPR. 2500/-'
            key2='125 - 149 (CC)'
            value2='NPR. 4000/-'
            key3='150 - 250 (CC)'
            value3='NPR. 8000/-'
            key4='251 - 400 (CC)'
            value4='NPR. 16000/-'
            key5='More than 400 (CC)'
            value5='NPR. 30000/-'
          />
        </section>
      </section>
    </>
  );
};

export default TaxDetailScreen;
