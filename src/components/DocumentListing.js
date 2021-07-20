import React from 'react';

const DocumentListing = () => {
  return (
    <>
      <section className='docs-list' id='taxpayer-documents'>
        <h3 className='heading-3 main-heading taxpayer-name'>Anonymous</h3>
        <section className='docs-details'>
          <p className='docs-date'>2021/07/12</p>
          <section className='docs'>
            <p className='doc'>
              <span>Citizenship:</span> doc1.pdf
            </p>
            <p className='doc'>
              <span>Bluebook:</span> doc2.pdf
            </p>
            <p className='doc'>
              <span>Vehicle:</span> doc3.pdf
            </p>
            <p className='doc'>
              <span>Insurance:</span> doc3.pdf
            </p>
          </section>
          <section className='btn-container'>
            <p className='btn btn--success'>Verified</p>
            <p className='btn btn--error'>Not verified</p>
          </section>
        </section>
      </section>
      <section className='docs-list'>
        <h3 className='heading-3 main-heading taxpayer-name'>Anonymous</h3>
        <section className='docs-details'>
          <p className='docs-date'>2021/07/12</p>
          <section className='docs'>
            <p className='doc'>
              <span>Citizenship:</span> doc1.pdf
            </p>
            <p className='doc'>
              <span>Bluebook:</span> doc2.pdf
            </p>
            <p className='doc'>
              <span>Vehicle:</span> doc3.pdf
            </p>
          </section>
          <section className='btn-container'>
            <p className='btn btn--success'>Verified</p>
            <p className='btn btn--error'>Not verified</p>
          </section>
        </section>
      </section>
    </>
  );
};

export default DocumentListing;
