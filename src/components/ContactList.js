import React from 'react';
import { GiPoliceOfficerHead, GiPhone } from 'react-icons/gi';
import { FaWhatsapp, FaViber, FaPhoneAlt } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const ContactList = ({ title, phone, email, whatsapp, viber }) => {
  return (
    <div className='contact-list-container'>
      <div className='contact-list-heading-box'>
        <h4 className='main-heading contact-list-heading'>
          <GiPoliceOfficerHead className='icon icon-officer' /> &nbsp;
          {title}
        </h4>
      </div>

      <div className='contact-list'>
        {' '}
        {phone && (
          <p className='contact-info light'>
            <GiPhone className='icon icon-phone' /> &nbsp;
            <a href={`tel:${phone}`}>{phone}</a>
          </p>
        )}
        {email && (
          <p className='contact-info dark'>
            <BiMailSend className='icon icon-mail' /> &nbsp;
            <a href={`mailto:${email}`}>{email}</a>
          </p>
        )}{' '}
        {whatsapp && (
          <p className='contact-info light'>
            <FaWhatsapp className='icon icon-whatsapp' /> &nbsp;
            <a href={`tel:${whatsapp}`}>{whatsapp}</a>
          </p>
        )}
        {viber && (
          <p className='contact-info dark'>
            <FaViber className='icon icon-viber' /> &nbsp;
            <a href={`tel:${viber}`}>{viber}</a>
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactList;
