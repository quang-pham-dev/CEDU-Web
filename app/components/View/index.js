import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './style';

const View = props => (
  <Wrapper className="container-view">{props.children}</Wrapper>
);

View.propTypes = {
  children: PropTypes.any,
};

export default View;
