import React from 'react';
import { MdEmail, MdPermContactCalendar } from 'react-icons/md';

const Profile = ({ profileData }) => {
  return (
    <>
      <h1 className='heading-1'>
        {profileData.firstname
          ? `${profileData.firstname} ${profileData.lastname}`
          : profileData.taxpayer_name}
      </h1>
      <section className='profile-details-container '>
        <div className='list-heading-box'>
          <h4 className='main-heading list-heading profile-list-heading'>
            Profile Details
          </h4>
        </div>

        <div className='list-details'>
          <p className='profile-list-info list-info light'>
            <MdPermContactCalendar className='profile-icon' />
            Contact
          </p>
          <p className='profile-list-value list-value dark'>
            {profileData.contact}
          </p>
        </div>
        <div className='list-details'>
          <p className='profile-list-info list-info light'>
            <MdEmail className='profile-icon' /> Email
          </p>
          <p className='profile-list-value list-value dark'>
            {profileData.email}
          </p>
        </div>
      </section>
    </>
  );
};

export default Profile;
