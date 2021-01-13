import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';

export const CheckBox = ({ className, id, label, checked, change }) => {
  return (
    <Wrapper className={className}>
      <input
        key={id}
        type="checkbox"
        id={id}
        checked={checked}
        name={id}
        onChange={() => {}}
      />
      <label htmlFor="active" onClick={change}>
        {label}
      </label>
    </Wrapper>
  );
};

CheckBox.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  checked: PropTypes.bool,
  change: PropTypes.func,
};

export default CheckBox;
