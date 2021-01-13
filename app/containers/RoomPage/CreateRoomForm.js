import React from 'react';
import PropTypes from 'prop-types';
import CreateRoomFormStyle from './CreateRoomFormStyle';
import Row from 'components/Row';
import Input from 'components/Input';
import Select from 'components/Select';
import Form from 'components/Form';
import SearchIcon from 'images/search.png';
import SampleIcon from 'images/sample.png';

export default ({}) => {
  const options = {
    icon: SampleIcon,
    label: 'Room Mode',
    subLabel: '',
    items: [
      {
        id: '1',
        label: 'Public',
        subLabel: 'Everyone can join without your acceptation',
        icon: 'https://www.facebook.com/rsrc.php/v3/yZ/r/IDAR_LcON7I.png'
      },
      {
        id: '2',
        label: 'Private',
        icon: 'https://www.facebook.com/rsrc.php/v3/yv/r/0sXdhIpI-vn.png',
        subLabel: 'Everyone can be join if you accept'
      }
    ],
  }
  return (
    <CreateRoomFormStyle id="form-create-room">
      <Form>
        <Input className="form-field" placeholder="Room Name" />
        <Select className="form-field" options={options}/>
      </Form>
    </CreateRoomFormStyle>
  )
}