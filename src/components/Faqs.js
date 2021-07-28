import React, { useState } from 'react';

import { FaAngleRight } from 'react-icons/fa';

const Faqs = () => {
  const [displayAns, setDisplayAns] = useState(false);

  return (
    <>
      <section className='faqs'>
        <FaAngleRight />
      </section>
    </>
  );
};

export default Faqs;
