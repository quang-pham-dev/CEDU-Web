import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';

export const ViewBody = ({ children }) => {
  return <Wrapper className="container-view-body">{children}</Wrapper>;
};

ViewBody.propTypes = {
  children: PropTypes.any,
};

export default ViewBody;
