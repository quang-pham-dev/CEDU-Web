import React from 'react';
import PropTypes from 'prop-types';
import ModalStyle from './style';
import Modal from './Modal';

export const ModalWrapper = ({ options, onUpdate }) => {
    if (!options) return null;
    return (
        <ModalStyle id="modal">
            <Modal options={ options } onUpdate={ onUpdate }/>
        </ModalStyle>
    )
}

export default ModalWrapper
