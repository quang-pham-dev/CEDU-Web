import React, { memo, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectGlobal } from 'containers/App/selectors';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import reducer from './reducer';
import saga from './saga';
// Components
import Title from 'components/Title';
import Meta from 'components/Meta';
import View from 'components/View';
import ViewBody from 'components/ViewBody';
import Row from 'components/Row';
import Button from 'components/Button';
import Input from 'components/Input';
import Text from 'components/Text';
import Table from 'components/Table';
import Br from 'components/Br';
import CreateIcon from 'images/create.png';
import SearchIcon from 'images/search.png';
import PropTypes from 'prop-types';

import { updateModal } from 'containers/App/actions';
import CreateRoomForm from './CreateRoomForm';

const key = 'room';
export function RoomPage({ onUpdateModal }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  useEffect(() => {}, []); // onInit
  const data = [
    {
      id: '101',
      name: 'Angular 9 in 2019 - 2020',
      author: 'Th. Nguyễn Văn Sỹ',
      members: '21/50',
      action: 'REGISTER'
    },
    {
      id: '102',
      name: 'React Native in 2019 - 2020',
      author: 'Ts. Trần Duy Mạnh',
      members: '44/50',
      action: 'JOIN',
    },
    {
      id: '103',
      name: 'ReactJS in 2019 - 2020',
      author: 'Th. Nguyễn Đại Hưng',
      members: '50/50',
      action: 'JOIN',
    },
    {
      id: '104',
      name: 'Fullstack JS in 2019 - 2020',
      author: 'Std. Lê Viết Duy Phúc',
      members: '11/50',
      action: 'REGISTER',
    }
  ]
  const header = ["ID", "Name", "Author", "Members", ""]

  const handleModal = () => {
    onUpdateModal({
      title: 'Create New Room',
      txtBtnYes: 'Create',
      txtBtnNo: 'Cancel',
      component: <CreateRoomForm />
    })
  }

  return (
    <React.Fragment>
      <Helmet>
        <Title value="Room Page" />
        <Meta name="description" content="Room page of CEDU application" />
      </Helmet>
      <View>
        <ViewBody>
          <Row col="3" mcol="2">
            <Input src={SearchIcon} placeholder="Find a room ..." />
            <Button text="New Room" icon={CreateIcon} click={() => { handleModal() }}/>
          </Row>
          <Br/>
          <Text value="Your Rooms" size="sm bold"/>
          <Table header={header} data={data} />
        </ViewBody>
      </View>
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  global: makeSelectGlobal()
})

const mapDispatchToProps = {
  // onGetRooms: getRooms,
  onUpdateModal: updateModal,
}

// const mapDispatchToProps = null

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
)

RoomPage.propTypes = {
  location: PropTypes.any,
  onUpdateModal: PropTypes.func,
};

export default compose(
  withConnect,
  memo,
)(RoomPage);
