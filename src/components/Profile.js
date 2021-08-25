import React from 'react';
import { MdEmail, MdLocationOn, MdPermContactCalendar } from 'react-icons/md';
import { RiBook2Fill } from 'react-icons/ri';
import {
  FaCalendarAlt,
  FaCar,
  FaLayerGroup,
  FaMotorcycle,
} from 'react-icons/fa';
import { AiFillSetting, AiOutlineNumber } from 'react-icons/ai';

const Profile = ({
  profileData,
  nextpaymentData,
  setLogoutStatusValue,
  setDeletedValue,
  type,
}) => {
  console.log(nextpaymentData);

  return (
    <section
      className={
        type === 'taxpayer'
          ? 'profile profile--taxpayer'
          : 'profile profile--admin'
      }
      id={`taxpayer-profile-info-${profileData.bluebook_number}`}
    >
      <h1 className='profile-heading'>
        Hello,{' '}
        {profileData.firstname
          ? `${profileData.firstname} ${profileData.lastname}`
          : profileData.taxpayer_name}
        !
      </h1>
      <section className='profile-details-container'>
        <section className='profile-top-container'>
          <section className='profile-details'>
            <h4 className='list-heading profile-list-heading'>
              Profile Information
            </h4>

            <section className='profile-detail'>
              <p className='profile-list-value'>
                <MdPermContactCalendar className='profile-icon' />
                <span>Contact:</span>&nbsp;{profileData.contact}
              </p>

              <p className='profile-list-value'>
                <MdEmail className='profile-icon' />
                <span>Email:</span>&nbsp;{profileData.email}
              </p>

              {profileData.province && (
                <p className='profile-list-value'>
                  <MdLocationOn className='profile-icon' />
                  <span>Province:</span> &nbsp;{profileData.province}
                </p>
              )}
              {profileData.bluebook_number && (
                <p className='profile-list-value'>
                  <RiBook2Fill className='profile-icon' />
                  <span>bluebook number:</span> &nbsp;
                  {profileData.bluebook_number}
                </p>
              )}
              {profileData.vehicle_number && (
                <p className='profile-list-value'>
                  <AiOutlineNumber className='profile-icon' />
                  <span>Vehicle number:</span> &nbsp;
                  {profileData.vehicle_number}
                </p>
              )}
              {profileData.lot && (
                <p className='profile-list-value'>
                  <FaLayerGroup className='profile-icon' />
                  <span>lot:</span> &nbsp;
                  {profileData.lot}
                </p>
              )}
              {profileData.type && (
                <p className='profile-list-value'>
                  {profileData.type.toLowerCase() === 'car' && (
                    <FaCar className='profile-icon' />
                  )}
                  {profileData.type.toLowerCase() === 'bike' && (
                    <FaMotorcycle className='profile-icon' />
                  )}
                  <span>Vehicle:</span> &nbsp;
                  {profileData.type}
                </p>
              )}
              {profileData.engine_cc && (
                <p className='profile-list-value'>
                  <AiFillSetting className='profile-icon' />
                  <span>Vehicle CC:</span> &nbsp;
                  {profileData.engine_cc}
                </p>
              )}
              {profileData.registered_date && (
                <p className='profile-list-value'>
                  <FaCalendarAlt className='profile-icon' />
                  <span>Regd. Date:</span> &nbsp;
                  {profileData.registered_date.split('T')[0]}
                </p>
              )}
            </section>
          </section>
          <section className='profile-next-tax-payment'>
            <strong>Next tax payment date</strong>
            <p>{nextpaymentData.nextDate.split('T')[0]}</p>
            <strong>Days remaining</strong>
            <p>
              {nextpaymentData.days > 1
                ? `${nextpaymentData.days} days`
                : `${nextpaymentData.days} day`}
            </p>
          </section>
        </section>
        <section className='profile-event'>
          <p
            className='btn btn-primary btn--logout'
            onClick={() => setLogoutStatusValue(true)}
            id='taxpayer-logout'
          >
            logout
          </p>
          <p
            className='btn btn-primary btn--delete'
            onClick={(e) => setDeletedValue(true)}
            id='taxpayer-delete'
          >
            delete
          </p>
        </section>
      </section>
    </section>
  );
};

export default Profile;
