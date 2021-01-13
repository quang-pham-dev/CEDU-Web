import React, { memo } from 'react';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Meta from 'components/Meta';
import View from 'components/View';
import ViewBody from 'components/ViewBody';
import Header from 'components/Header';
import Menu from 'components/Menu';
import Modal from 'components/Modal';
import SidebarMenu from 'components/SidebarMenu';
import Container from 'components/Container';
import GlobalStyle from 'styles/general';
import HomePage from 'containers/HomePage/Loadable';
import RoomPage from 'containers/RoomPage/Loadable';
import DocumentPage from 'containers/DocumentPage/Loadable';
import CalendarPage from 'containers/CalendarPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import withAuthenticator from 'HOC/authenticator';
import { useInjectSaga } from 'utils/injectSaga';
import saga from 'containers/App/saga';
import { updateToggleMenu, updateModal } from './actions';

const key = 'global';
const AppWrapper = styled.div``;

export function App({ props }) {
  useInjectSaga({ key, saga });
  let appMenuStyle = 'menu-collapsed';
  let appSidebarStyle = 'sidebar-closed';
  let appModalStyle = 'modal-collapsed';
  const { menu } = props.global.toggles;
  const { sidebar } = props.global.toggles;
  const { modal } = props.global;
  if (menu && menu.expanded) {
    appMenuStyle = 'menu-expanded';
  }
  if (sidebar && sidebar.expanded) {
    appSidebarStyle = 'sidebar-expanded';
  }
  if (modal) {
    appModalStyle = 'modal-expanded'
  }

  const handelUpdateModal = data => {
    props.onUpdateModal(data);
  }

  return (
    // eslint-disable-next-line no-constant-condition
    <AppWrapper className={`${appMenuStyle} ${appSidebarStyle} ${appModalStyle}`}>
      <Helmet titleTemplate="%s - CEDU" defaultTitle="CEDU">
        <Meta
          name="description"
          content="a system for education using cloud technologies"
        />
      </Helmet>
      <Header
        currentUser={props.global.currentUser}
        toggleMenu={props.global.toggles.menu}
      />
      <Menu
        currentLocation={props.location}
        isToggleMenuExpanded={props.global.toggles.menu}
        onUpdateMenuToggle={props.onUpdateMenuToggle}
      />
      <SidebarMenu global={props.global} />
      <Container>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/room" component={RoomPage} />
          <Route path="/document" component={DocumentPage} />
          <Route path="/calendar" component={CalendarPage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </Container>
      <Modal options={ modal } onUpdate={ handelUpdateModal }/>
    </AppWrapper>
  );
}

App.propTypes = {
  location: PropTypes.any,
  props: PropTypes.any,
  global: PropTypes.object,
  onUpdateMenuToggle: PropTypes.func,
  onUpdateModal: PropTypes.func,
};

const mapStateToProps = state => ({
  location: state.router.location,
});

const mapDispatchToProps = {
  onUpdateMenuToggle: updateToggleMenu,
  onUpdateModal: updateModal,
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(withAuthenticator(App));
