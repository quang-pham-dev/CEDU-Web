import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';
import Icon from 'components/Icon';

export function Input({ className, change, src, value, label, required, placeholder, type, size }) {
  return (
    <Wrapper className={`input-field inline ${className} ${size} ${src ? 'withicon' : ''}`}>
      { src && <Icon size={size} src={src} />}
      <input
        id={value}
        type="text"
        className={type}
        name={value}
        placeholder={placeholder}
        onChange={e => change(e.target.value)}
        required={required}
      />
      <label htmlFor={label}>{label}</label>
    </Wrapper>
  );
}

Input.propTypes = {
  fa: PropTypes.string,
  value: PropTypes.string,
  change: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  required: PropTypes.bool,
  type: PropTypes.string,
};

export default Input;
