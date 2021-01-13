import React from 'react';
import PropTypes from 'prop-types';
import menuActiveItems from 'utils/menuActive';
import RoomIcon from 'images/room.png';
import DocumentIcon from 'images/document.png';
import CalendarIcon from 'images/calendar.png';
import UICoreIcon from 'images/uicore.png';
import Wrapper from './style';
import Item from './Item';
import ToggleBtn from './ToggleBtn';

function Menu({ currentLocation, onUpdateMenuToggle, isToggleMenuExpanded }) {
  const activeItems = menuActiveItems(currentLocation);
  return (
    <Wrapper id="menu">
      <Item className={activeItems[0]} to="/room" text="Room" src={RoomIcon} />
      <Item
        className={activeItems[1]}
        to="/document"
        text="Document"
        src={DocumentIcon}
      />
      <Item
        className={activeItems[2]}
        to="/calendar"
        text="Calendar"
        src={CalendarIcon}
      />
      <ToggleBtn isToggleOpen={isToggleMenuExpanded} evt={onUpdateMenuToggle} />
    </Wrapper>
  );
}

Menu.propTypes = {
  currentLocation: PropTypes.object,
  isToggleMenuExpanded: PropTypes.object,
  onUpdateMenuToggle: PropTypes.func,
};

export default Menu;
