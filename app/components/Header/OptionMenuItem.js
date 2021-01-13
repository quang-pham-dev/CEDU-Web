import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { makeSelectToggles } from 'containers/App/selectors';
import { createStructuredSelector } from 'reselect';
import { updateToggleMenu } from 'containers/App/actions';
import Icon from 'components/Icon';
import Tooltip from 'components/Tooltip';

export const Wrapper = styled.div`
  position: relative;
  .marker {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 8px solid white;
    position: absolute;
    bottom: -8px;
    visibility: hidden;
  }
`;

export function OptionItemMenu(props) {
  const {
    className,
    src,
    srcActive,
    item,
    toggles,
    onUpdateToggleMenu,
    tooltip
  } = props;
  let env = null;
  let actived = null;
  // eslint-disable-next-line no-underscore-dangle
  let _src = src;
  if (item === 'ToggleMenu') {
    if (toggles.menu.expanded) {
      _src = srcActive;
    }
    env = () => {
      onUpdateToggleMenu({ key: 'menu' });
    };
  } else {
    if (item === toggles.sidebar.itemActived) {
      actived = 'active';
      _src = srcActive;
    }
    env = () => {
      onUpdateToggleMenu({ key: 'sidebar', itemActived: item });
    };
  }

  return (
    <Wrapper className={`flex-center ${className} ${actived}`} onClick={env}>
      <Icon src={_src} size="sm" className="hovering" tooltip={tooltip} alt="CEDU - Icon" />
      <span className="marker"/>
    </Wrapper>
  );
}

OptionItemMenu.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  srcActive: PropTypes.string,
  item: PropTypes.string,
  toggles: PropTypes.object,
  onUpdateToggleMenu: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  toggles: makeSelectToggles(),
});

const mapDispatchToProps = {
  onUpdateToggleMenu: updateToggleMenu,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OptionItemMenu);
