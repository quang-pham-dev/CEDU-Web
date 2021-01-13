import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';

export const RowItem = ({ className, children }) => {
  return <Wrapper className={className}>{children}</Wrapper>;
};

RowItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
};

export default RowItem;
