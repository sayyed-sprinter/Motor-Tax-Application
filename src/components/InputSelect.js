import React from 'react';

const InputSelect = ({ label, labelFor }) => {
  return (
    <div className='input--text'>
      <label className='label' for={labelFor}>
        {label}
      </label>
      <select id={labelFor}>
        <option>New Co</option>
      </select>
    </div>
  );
};

export default InputSelect;
