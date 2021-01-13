import React from 'react';
import PropTypes from 'prop-types';
import { TriangleStyle } from './style';

export const Triangle = ({ type }) => {
    return <TriangleStyle className={type}/>
}

Triangle.propTypes = {
    type: PropTypes.string
}

export default Triangle