import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Avatar from 'images/male.png';

export const Wrapper = styled.div`
  width: 100%;
  .thumb-profile {
    height: 100%;
    margin-left: 20px;
    display: flex;
    align-items: center;
    .avatar {
      width: 40px;
      height: 40px;
    }
    .fullname {
      margin-left: 10px;
      font-size: 15px;
    }
  }
`;

export function ThumbProfile({ profile }) {
  let displayName = profile.username;
  if (profile.containers && profile.containers.fullname) {
    displayName = profile.containers.fullname;
  };
  return (
    <Wrapper className="">
      <div className="thumb-profile">
        <img className="avatar pointer" src={Avatar} alt="Notifications" />
        <span className="fullname">{displayName}</span>
      </div>
    </Wrapper>
  );
}

ThumbProfile.propTypes = {
  profile: PropTypes.object,
}

export default ThumbProfile;