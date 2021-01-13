import React from 'react';
import PropTypes from 'prop-types';

export const Title = ({ value }) => {
    return <title>{value}</title>
}

Title.propTypes = {
    value: PropTypes.string
}

export default Title
