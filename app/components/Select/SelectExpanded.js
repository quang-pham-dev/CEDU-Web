import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import enhanceWithClickOutside  from 'react-click-outside';

export class SelectExpanded extends React.Component {
    constructor(props) {
        super(props)
    }

    handleClickOutside() {
        this.props.onClose();
    }

    render() {
        const { items } = this.props;
        return (
            <div className="select-expanded_container">
                { items.map((item, index) => {
                    return <div key={`select-expanded-${index}`} className="select-expanded_container__item" onClick={ () => this.props.onGetItem(item) }>
                        { item.icon && <Icon className="select-expanded_container__item-icon" size="sm" src={item.icon}/> }
                        <div className="select-expanded_container__item-view">
                            <div className="select-expanded_container__item-view_label">{item.label}</div>
                            { item.subLabel && <div className="select-expanded_container__item-view_sublabel">{item.subLabel}</div> }
                        </div>
                    </div>
                }) }
            </div>
        )
    }
}

export default enhanceWithClickOutside(SelectExpanded)