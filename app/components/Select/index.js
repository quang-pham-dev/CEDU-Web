import React from 'react'
import PropTypes from 'prop-types'
import SelectStyle from './style';
import Triangle from 'components/Shapes/Triangle';
import Icon from 'components/Icon';
import Text from 'components/Text';
import SearchIcon from 'images/search.png';
import SampleIcon from 'images/sample.png';
import SelectExpanded from './SelectExpanded';

export class Select extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isExpanding: false,
            itemSelected: null
        }
    }

    handleExpanding = isExpanded => {
        this.setState({
            isExpanding: isExpanded
        })
    }

    handleItemChosing = item => {
        this.setState({
            itemSelected: item
        })
        this.handleExpanding(null)
    }

    render() {
        const { options } = this.props;
        const { isExpanding, itemSelected } = this.state;
        return (
            <SelectStyle id="select">
                <div className="select-master" onClick={() => this.handleExpanding(true)}>
                    {
                        (itemSelected && itemSelected.icon) ?
                        <Icon src={ itemSelected.icon } size="sm" className="select-icon"/> :
                        <Icon src={ SampleIcon } size="sm" className="select-icon"/>
                    }
                    { !itemSelected ? <Text value={ options.label } /> : <Text value={ itemSelected.label } />}
                    <div className="wrap-triangle">
                        <Triangle type="down"/>
                    </div>
                </div>
                { isExpanding && <div className="select-expanded">
                    <SelectExpanded
                        items={ options.items }
                        onClose={ evt => this.handleExpanding(evt) }
                        onGetItem={ evt => { this.handleItemChosing(evt) }}
                    />
                </div> }
            </SelectStyle>
        )
    }
}

export default Select
