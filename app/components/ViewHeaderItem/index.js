import React from 'react';
import PropTypes from 'prop-types';
import Text from 'components/Text';

import Wrapper from './style';

export const ViewHeaderItem = ({ to, text, type, active }) => {
  return (
    <Wrapper to={to} className={active}>
      <Text value={text} size="md" />
    </Wrapper>
  );
};

ViewHeaderItem.propTypes = {
  to: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  active: PropTypes.string,
};

export default ViewHeaderItem;
