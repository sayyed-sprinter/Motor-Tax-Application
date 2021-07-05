import React from 'react';

const InputText = ({ label, labelFor }) => {
  return (
    <div className='input--text'>
      <label className='label' for={labelFor}>
        {label}
      </label>
      <input type='text' id={labelFor} required></input>
    </div>
  );
};

export default InputText;
