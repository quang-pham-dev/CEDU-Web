import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from 'styles/colors';
import { Link } from 'react-router-dom';
import Icon from 'components/Icon';
import Text from 'components/Text';

export const Wrapper = styled(Link)``;

export function MenuItem(props) {
  const { to, text, src, className } = props;
  return (
    <Wrapper className={`menu-item-link ${className}`} to={to}>
      <Icon className={`menu-icon ${className}`} src={src} size="md" alt="CEDU - Menu Link Icon" />
      <Text className="menu-title" value={text} />
    </Wrapper>
  );
}

MenuItem.propTypes = {
  to: PropTypes.string,
  src: PropTypes.string,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default MenuItem;
