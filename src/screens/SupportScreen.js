import React from 'react';
import ContactList from '../components/ContactList';
import SupportForm from '../components/SupportForm';

const SupportScreen = () => {
  return (
    <section className='support-container' id='support-container'>
      <article className='about-us'>
        <h1 className='heading-1 about-us-heading'>About us</h1>
        <p className='about-us-content'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
          earum, sequi veniam, sed voluptates vitae quisquam culpa dicta quis
          delectus nisi maxime, voluptatum corrupti enim quidem. Adipisci
          numquam molestias recusandae? Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Voluptas magni ipsa adipisci, aut aperiam ducimus
          non libero modi quas esse eos. Numquam, animi. Quam dolore atque
          incidunt laboriosam soluta nam.
        </p>
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
