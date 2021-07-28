import React from 'react';

import { VscLoading } from 'react-icons/vsc';

const Loader = () => {
  return (
    <section className='loader-container'>
      <VscLoading className='loader loader-general' />
    </section>
  );
};

export default Loader;
