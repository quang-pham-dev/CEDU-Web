import React from 'react';
import PropTypes from 'prop-types';
import CancelIcon from 'images/cancel.png';
import Button from 'components/Button';
import Icon from 'components/Icon';
import enhanceWithClickOutside from 'react-click-outside';

export class Modal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOverClosedForce: false
        }
    }

    handleClickOutside() {
        if (this.state.isOverClosedForce) {
            this.onCloseModal();
            return;
        }
        if (this.props.options.isOverClosed) {
            this.onCloseModal();
        }
    }

    onCloseModal = () => {
        this.props.onUpdate(null);
    }

    handleClose = () => {
        this.onCloseModal();
    }

    render() {
        const { options } = this.props;
        return (
            <div className="modal">
                <div className="modal-header">
                    <h3 className="modal-header_title">{ options.title }</h3>
                    <span className="modal-header_close" onClick={() => this.handleClose()}>
                        <Icon className="hovering" src={ CancelIcon }/>
                    </span>
                </div>
                <div className="modal-body">{ options.component }</div>
                <div className="modal-footer">
                    { options.txtBtnNo && <Button className="bold mgr-5" text={options.txtBtnNo} type="default" click={() => this.handleClose()}/> }
                    { options.txtBtnYes && <Button className="bold" text={options.txtBtnYes} type="primary" click={() => {}}/> }
                </div>
            </div>
        )
    }
}

export default enhanceWithClickOutside(Modal)
