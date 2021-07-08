import React from 'react';

const List = ({
  title,
  key1,
  value1,
  key2,
  value2,
  key3,
  value3,
  key4,
  value4,
  key5,
  value5,
}) => {
  return (
    <div className='list-container'>
      <div className='list-heading-box'>
        <h4 className='btn list-heading'>{title}</h4>
      </div>
      <div className='list-details'>
        <p className='list-info light'>{key1}</p>
        <p className='list-value dark'>{value1}</p>
      </div>
      <div className='list-details'>
        <p className='list-info dark'>{key2}</p>
        <p className='list-value light'>{value2}</p>
      </div>
      <div className='list-details'>
        <p className='list-info light'>{key3}</p>
        <p className='list-value dark'>{value3}</p>
      </div>
      <div className='list-details'>
        <p className='list-info dark'>{key4}</p>
        <p className='list-value light'>{value4}</p>
      </div>
      <div className='list-details'>
        <p className='list-info light'>{key5}</p>
        <p className='list-value dark'>{value5}</p>
      </div>
    </div>
  );
};

export default List;
