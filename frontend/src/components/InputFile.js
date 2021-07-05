import React from 'react';

import { BiLinkAlt } from 'react-icons/bi';

const InputFile = ({ label, labelFor }) => {
  return (
    <div className='input--file'>
      <BiLinkAlt className='file-icon' />{' '}
      <label for={labelFor} className='label-file'>
        {label}
      </label>{' '}
      <input type='file' id={labelFor} />
    </div>
  );
};

export default InputFile;
