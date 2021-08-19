import React from 'react';
import Form from '../components/Form';
import Hero from '../components/Hero';

const HomeScreen = ({ history }) => {
  return (
    <>
      <Hero />
      <Form history={history} />
    </>
  );
};

export default HomeScreen;
