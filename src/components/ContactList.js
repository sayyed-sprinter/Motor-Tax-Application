import React from 'react';

const ContactList = ({ title, phone, email, whatsapp, viber }) => {
  return (
    <div className='contact-list-container'>
      <div className='contact-list-heading-box'>
        <h4 className='main-heading contact-list-heading'>{title}</h4>
      </div>

      <div className='contact-list'>
        {' '}
        {phone && <p className='contact-info light'>{phone}</p>}
        {email && <p className='contact-info dark'>{email}</p>}{' '}
        {whatsapp && <p className='contact-info light'>{whatsapp}</p>}
        {viber && <p className='contact-info dark'>{viber}</p>}
      </div>
    </div>
  );
};

export default ContactList;
