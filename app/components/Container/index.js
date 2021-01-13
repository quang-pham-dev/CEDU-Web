import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateToggleMenu } from 'containers/App/actions';
import ContainerWrapper from './ContainerWrapper';

function Container(props) {
  const { sidebar } = props.global.toggles;
  const { menu } = props.global.toggles;
  return (
    <ContainerWrapper
      id="container"
      onClick={() => {
        // eslint-disable-next-line no-restricted-globals
        if (screen.width <= 600) {
          if (!menu.expanded) return;
          return props.onUpdateToggleMenu({
            isMobile: true,
            key: 'menu',
          });
        }
        if (sidebar.itemActived) {
          if (!sidebar.itemActived) return;
          return props.onUpdateToggleMenu({
            key: 'sidebar',
            itemActived: null,
          });
        }
      }}
    >
      {props.children}
    </ContainerWrapper>
  );
}

Container.propTypes = {
  children: PropTypes.any,
  onUpdateToggleMenu: PropTypes.func,
};

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {
  onUpdateToggleMenu: updateToggleMenu,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container);
