/**
 *
 * Button.js
 *
 * A common button, if you pass it a prop "route" it'll render a link to a react-router route
 * otherwise it'll render a link with an onclick
 */

import React from 'react';
import PropTypes from 'prop-types';
import Text from 'components/Text';
import ButtonStyle from './style';

function Button({ className, text, icon, size, type, click }) {
  return (
    <ButtonStyle
      className={`btn ${size} ${type} ${className}`}
      onClick={() => {
        click();
      }}
    >
      { icon && <img src={icon} /> }
      { className !== 'btn-floating' && <Text value={text} /> }
    </ButtonStyle>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  click: PropTypes.func.isRequired,
};

export default Button;
