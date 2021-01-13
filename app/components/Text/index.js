import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';

export function Text({ value, size, color, type, required, className }) {
  const textStyles = `text ${size || 'lg'} ${color || type}`;
  return (
    <Wrapper className={`${className} ${textStyles}`}>
      {required && value.replace(' :' || ':' || ': ', '* :')}
      {!required && value}
    </Wrapper>
  );
}

Text.propTypes = {
  value: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  required: PropTypes.bool,
};

export default Text;
