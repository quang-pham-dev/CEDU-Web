import React from 'react';
import PropTypes from 'prop-types';
import viewHeaderActive from 'utils/viewHeaderActive';
import Wrapper from './style';
import ViewHeaderItem from '../ViewHeaderItem';

const ViewHeader = ({ type, routes, location, page }) => {
  const actives = viewHeaderActive(location, page);
  return (
    <Wrapper className={`container-view-header ${type}`}>
      {routes.map((route, index) => (
        <ViewHeaderItem
          // eslint-disable-next-line react/no-array-index-key
          key={`view_header_item_key_${index}`}
          active={actives[index]}
          to={route.url}
          text={route.text}
        />
      ))}
    </Wrapper>
  );
};

ViewHeader.propTypes = {
  type: PropTypes.string.isRequired,
  routes: PropTypes.any,
  location: PropTypes.object,
  page: PropTypes.string,
};

export default ViewHeader;
