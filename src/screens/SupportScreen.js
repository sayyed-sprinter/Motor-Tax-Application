import React from 'react';
import ContactList from '../components/ContactList';
import SupportForm from '../components/SupportForm';
import { ABOUT_US } from '../constants/aboutUsConstants';

const SupportScreen = () => {
  return (
    <section className='support-container' id='support-container'>
      <article className='about-us'>
        <h1 className='heading-1 about-us-heading'>About us</h1>
        <p className='about-us-content'>{ABOUT_US}</p>
      </article>
      <section className='contact-us'>
        <section className='contact-form'>
          <h2 className='heading-2 contact-heading'>Leave us a message</h2>
          <SupportForm />
        </section>
        <section className='contact-details'>
          <h2 className='heading-2 contact-heading'>Contact us</h2>
          <ContactList
            title='Tax collecting officer'
            phone='+977-9812346578'
            email='officer@paymotortax.live'
            whatsapp='+977-9812346578'
            viber='+977-9812346578'
          />
        </section>
      </section>
    </section>
  );
};

export default SupportScreen;
