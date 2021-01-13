/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';

export const ButtonRadio = ({ className, items }) => {
  // c
  const key = 'RADIO_BUTTON';
  return (
    <Wrapper className={className}>
      {items.map(item => {
        return (
          <React.Fragment key={`${key}_ip_${item.id}`}>
            <input name="restriction" type="radio" id={item.id} />
            <label htmlFor={item.id}>{item.label}</label>
          </React.Fragment>
        );
      })}
    </Wrapper>
  );
};

ButtonRadio.propTypes = {
  className: PropTypes.string,
  items: PropTypes.array,
};

export default ButtonRadio;
