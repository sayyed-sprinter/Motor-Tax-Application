import React from 'react';

const Switch = ({ value, setValue, text, classname = 'right' }) => {
  return (
    <section className={`value-switch-container switch--${classname}`}>
      {' '}
      <p className='value-switch-text'>{text}</p>
      <section className='value-switch' onClick={() => setValue(!value)}>
        {value ? (
          <section
            className='value-switch-btn value-switch-btn--on'
            onClick={() => setValue(!value)}
            id={`btn-switch-${text.toLowerCase()}`}
          ></section>
        ) : (
          <section
            className='value-switch-btn value-switch-btn--off'
            onClick={() => setValue(!value)}
            id={`btn-switch-${text.toLowerCase()}`}
          >
            &nbsp;
          </section>
        )}
      </section>
    </section>
  );
};

export default Switch;
