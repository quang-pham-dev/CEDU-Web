/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logout } from 'containers/App/actions';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 10px;
  .sidebar-menu-setting-item {
    text-align: right;
    font-size: 14px;
    &: hover {
      background-color: white;
    }
  }
`;

export function Settings({ onLogout }) {
  const logoutEvt = () => onLogout();
  return (
    <Wrapper className="sidebar-menu-settings">
      <div className="sidebar-menu-setting-item pointer">Profile</div>
      <div className="sidebar-menu-setting-item pointer">Theme</div>
      <div className="sidebar-menu-setting-item pointer">Language</div>
      <div className="sidebar-menu-setting-item pointer">General</div>
      <div className="sidebar-menu-setting-item pointer" onClick={logoutEvt}>
        Sign Out
      </div>
    </Wrapper>
  );
}

Settings.propTypes = {
  onLogout: PropTypes.func,
};

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(
  null,
  mapDispatchToProps,
)(Settings);
