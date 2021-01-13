import React from 'react';
import styled from 'styled-components';
import AppLogo from 'images/logo.png';
import Brand from './Brand';
import Input from 'components/Input';
import Icon from 'components/Icon';
import Text from 'components/Text';
import SearchIcon from 'images/search.png';

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  .input-field {
    width: calc(100% - 110px);
    height: 35px
  }
  .icon-brand {
    width: 25px;
    display: contents;
  }
`;

export default function() {
  return (
    <Wrapper>
      <Brand id="brand" to="/">
        <Icon
          className="icon-brand pointer"
          size="md"
          src={AppLogo}
          alt="cedu-logo - Icon"
        />
        <Text value="CEDU" />
      </Brand>
      <Input src={SearchIcon} size="sm" type="default" placeholder="Search every things ..." />
    </Wrapper>
  );
}
