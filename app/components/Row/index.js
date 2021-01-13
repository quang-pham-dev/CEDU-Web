import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Row = ({ children, col, mcol }) => {
  const Wrapper = styled.div`
    display: grid;
    grid-gap: 5px;
    grid-template-columns: repeat(${col}, 1fr);
    @media screen and (max-width: 767px) {
      grid-template-columns: repeat(${mcol}, 1fr);
    }
  `
  return <Wrapper className="row">{children}</Wrapper>;
};

Row.propTypes = {
  children: PropTypes.any,
};

export default Row;
