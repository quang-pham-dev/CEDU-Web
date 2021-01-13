import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ToggleCollapse from 'images/toggle-menu-close.png';
import ToggleExpend from 'images/toggle-menu-open.png';

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  bottom: 50px;
  padding: 0px 10px 10px 10px;
  span {
    &.right {
      float: right;
    }
    &.left {
      float: left;
    }
    .toggle-img {
      width: 22px;
    }
  }
`;

export function ToggleMenuButton({ isToggleOpen, evt }) {
  return (
    <Wrapper
      id="menu-toggle-btn"
      onClick={() => {
        evt({ key: 'menu' });
      }}
    >
      {isToggleOpen.expanded ? (
        <span className="right pointer">
          <img className="toggle-img" src={ToggleCollapse} alt="" />
        </span>
      ) : (
        <span className="left pointer">
          <img className="toggle-img" src={ToggleExpend} alt="" />
        </span>
      )}
    </Wrapper>
  );
}

ToggleMenuButton.propTypes = {
  isToggleOpen: PropTypes.any,
  evt: PropTypes.func,
};

export default ToggleMenuButton;
