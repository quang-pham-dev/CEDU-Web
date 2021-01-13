import React from 'react';
import PropTypes from 'prop-types';
import FormStyle from './style';

export const Form = (props) => {
    return (
        <FormStyle id="form-group">{props.children}</FormStyle>
    )
}

export default Form