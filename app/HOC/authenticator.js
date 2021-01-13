import React, { Component } from 'react';
import { Authenticator } from 'aws-amplify-react';
// import Authenticator from 'containers/Auth';
import { createStructuredSelector } from 'reselect';
import { currentUser, logout } from 'containers/App/actions';
import { makeSelectGlobal } from 'containers/App/selectors';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import { Hub } from 'aws-amplify';
import signUpConfig from 'utils/signupConfig';

export default function(ComposedComponent) {
  class AuthenticatorComponent extends Component {
    constructor(props) {
      super(props);
      Hub.listen('auth', () => {
        this.props.onGetCurrentUser();
      });
    }

    async componentDidMount() {
      this.props.onGetCurrentUser();
    }

    render() {
      // eslint-disable-next-line no-shadow
      const { global } = this.props;
      if (global.currentUser) return <ComposedComponent props={this.props} />;
      return <Authenticator signUpConfig={signUpConfig} />;
    }
  }

  AuthenticatorComponent.propTypes = {
    global: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    onGetCurrentUser: PropTypes.func,
  };

  const mapStateToProps = createStructuredSelector({
    global: makeSelectGlobal(),
  });

  const mapDispatchToProps = dispatch => ({
    onGetCurrentUser: () => {
      dispatch(currentUser());
    },
    onLogout: () => {
      dispatch(logout());
    },
  });

  const withConnect = connect(
    mapStateToProps,
    mapDispatchToProps,
  );

  return compose(withConnect)(AuthenticatorComponent);
}
