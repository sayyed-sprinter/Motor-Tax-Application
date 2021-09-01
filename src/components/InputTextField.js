import React from 'react';

const InputTextField = ({
  value,
  setValue,
  idValue,
  classValue,
  labelName,
  inputType,
  isRegExpValid,
}) => {
  return (
    <>
      {isRegExpValid ? (
        <section className={classValue}>
          <label className='label' htmlFor={idValue}>
            {labelName || 'Label'}
          </label>
          <input
            type={inputType ? inputType : 'text'}
            id={idValue}
            name={idValue}
            required
            pattern='^[a-zA-Z ]*$'
            title='Only text are allowed'
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </section>
      ) : (
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
      )}
    </>
  );
};

export default InputTextField;
