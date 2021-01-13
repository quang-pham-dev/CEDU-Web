import React from 'react';
import PropTypes from 'prop-types';

export const Meta = ({ name, content }) => {
    return <meta name={name} content={content} />
}

Meta.propTypes = {
    name: PropTypes.string,
    content: PropTypes.string,
}

export default Meta
