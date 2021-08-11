import React from 'react';

const InputTextField = ({
  value,
  setValue,
  idValue,
  classValue,
  labelName,
  inputType,
}) => {
  return (
    <>
      <section className={classValue}>
        <label className='label' htmlFor={idValue}>
          {labelName || 'Label'}
        </label>
        <input
          type={inputType ? inputType : 'text'}
          id={idValue}
          name={idValue}
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </section>
    </>
  );
};

export default InputTextField;
