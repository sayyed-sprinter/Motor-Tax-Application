import React from 'react';
import Feedback from '../components/Feedback';
import Form from '../components/Form';
import Hero from '../components/Hero';

const HomeScreen = ({ history }) => {
  return (
    <>
      <Hero />
      <Form history={history} />
      <Feedback />
    </>
  );
};

export default HomeScreen;
