import React from 'react';
import PropTypes from 'prop-types';
import { Auth } from 'aws-amplify';
import Input from 'components/Input';

export function Authenticator() {
  return (
    <div>
      <Input
        _key="username"
        label="Username"
        isRequired
        value={evt => {
          valueChanged(evt);
        }}
      />
      <Input
        _key="password"
        label="Password"
        isRequired
        value={evt => {
          valueChanged(evt);
        }}
      />
    </div>
  );
}

export default Authenticator;
