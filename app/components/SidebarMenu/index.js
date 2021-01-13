import React from 'react';
import PropTypes from 'prop-types';
import SidebarMenuStyle from './style';
import Settings from './Settings';
import Messages from './Messages';
import Notifications from './Notifications';

export function SidebarMenu({ global }) {
  let template = <Settings />;
  if (global.toggles.sidebar.itemActived === 'Message') {
    template = <Messages />;
  }
  if (global.toggles.sidebar.itemActived === 'Notification') {
    template = <Notifications />;
  }
  return <SidebarMenuStyle id="sidebar">{template}</SidebarMenuStyle>;
}

SidebarMenu.propTypes = {
  global: PropTypes.object,
};

export default SidebarMenu;
