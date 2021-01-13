import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from 'components/Tooltip';
import IconStyle from './style';

export function Icon({ src, size, alt, tooltip, className }) {
  return (
    <IconStyle className={className}>
      { !tooltip && <img className={`pointer ${size}`} src={src} alt={alt}/> }
      { tooltip &&
        <Tooltip placement="bottom" trigger="hover" tooltip={tooltip}>
          <img className={`pointer ${size}`} src={src} alt={alt}/>
        </Tooltip> }
    </IconStyle>
  )
}

Icon.propTypes = {
  size: PropTypes.string,
  src: PropTypes.any,
  alt: PropTypes.string,
};

export default Icon;
