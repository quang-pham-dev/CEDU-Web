import React from 'react';
import PropsType from 'prop-types';
import { logout } from 'containers/App/actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectCurrentUser } from 'containers/App/selectors';
function Settings({ onLogout }) {
  const change = evt => {
    if (evt.target.value === '5') {
      onLogout();
    }
  };
  return (
    <select
      onChange={$event => {
        change($event);
      }}
    >
      <option value="1">Settings</option>
      <option value="2">Theme</option>
      <option value="3">Profile</option>
      <option value="4">General</option>
      <option value="5">Signout</option>
    </select>
  );
}

Settings.propTypes = {
  onLogout: PropsType.func,
};

const mapStateToProps = createStructuredSelector({
  currentUser: makeSelectCurrentUser,
});

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Settings);
