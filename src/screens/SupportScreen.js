import React from 'react';
import ContactList from '../components/ContactList';
import SupportForm from '../components/SupportForm';

const SupportScreen = () => {
  return (
    <section className='support-container' id='support-container'>
      <section className='contact-form'>
        <h2 className='heading-2 contact-heading'>Leave us a message</h2>
        <SupportForm />
      </section>
      <section className='contact-details'>
        <h2 className='heading-2 contact-heading'>Contact us</h2>
        <ContactList
          title='Sayyed Abrar Akhtar'
          phone='+977-9862405047'
          email='akhtars10@uni.coventry.ac.uk'
          whatsapp='+977-9862405047'
          viber='+977-9862405047'
        />
      </section>
    </section>
  );
};

export default SupportScreen;
