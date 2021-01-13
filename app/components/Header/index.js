import React from 'react';
import PropTypes from 'prop-types';
import MessageIcon from 'images/message.png';
import MessageActiveIcon from 'images/message-active.png';
import NoficationIcon from 'images/notification.png';
import NoficationActiveIcon from 'images/notification-active.png';
import SettingIcon from 'images/setting.png';
import SettingActiveIcon from 'images/setting-active.png';
import Avatar from 'images/male.png';
import ToggleMenuIcon from 'images/toggle-menu.png';
import ToggleMenuActiveIcon from 'images/toggle-menu-active.png';
import Wrapper from './Wrapper';
import OptionMenuWrapper from './OptionMenuWrapper';
import OptionMenu from './OptionMenu';
import Search from './Search';
import ThumbProfile from './ThumbProfile';
import OptionMenuItem from './OptionMenuItem';

function Header({ currentUser }) {
  return (
    <Wrapper id="header">
      <div className="header-cell">
        <Search id="global-search" />
      </div>
      <div className="header-cell">
        <OptionMenuWrapper>
          <OptionMenu className="option-item-profile web">
            <ThumbProfile profile={currentUser} />
          </OptionMenu>
          <OptionMenu className="option-item-menu">
            {/* <Settings /> */}
            <OptionMenuItem
              className="option-item mobile"
              src={ToggleMenuIcon}
              srcActive={ToggleMenuActiveIcon}
              item="ToggleMenu"
            />
            <OptionMenuItem
              className="option-item mobile"
              src={Avatar}/>
            <OptionMenuItem
              className="option-item"
              src={NoficationIcon}
              srcActive={NoficationActiveIcon}
              item="Notification"
              tooltip="Notification"
            />
            <OptionMenuItem
              className="option-item"
              src={MessageIcon}
              srcActive={MessageActiveIcon}
              item="Message"
              tooltip="Message"
            />
            <OptionMenuItem
              className="option-item"
              src={SettingIcon}
              srcActive={SettingActiveIcon}
              item="Setting"
              tooltip="Setting"
            />
          </OptionMenu>
        </OptionMenuWrapper>
      </div>
    </Wrapper>
  );
}

Header.propTypes = {
  currentUser: PropTypes.object,
};

export default Header;
