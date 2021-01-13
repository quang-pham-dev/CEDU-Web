import React from 'react';
import { Helmet } from 'react-helmet';
import Title from 'components/Title';
import Meta from 'components/Meta';
import View from 'components/View';
import ViewBody from 'components/ViewBody';
import Calendar from 'components/Calendar';

export function CalendarPage() {
  const rooms = [
    {
      id: '101',
      title: 'Angular 9'
    },
    {
      id: '102',
      title: 'English Speaking on Level 1'
    },
    {
      id: '103',
      title: 'React Native'
    },
  ]
  return (
    <React.Fragment>
      <Helmet>
        <Title value="Calendar Page" />
        <Meta name="description" content="Calendar page of CEDU application"/>
      </Helmet>
      <View>
        <ViewBody>
          <Calendar rooms={rooms} />
        </ViewBody>
      </View>
    </React.Fragment>
  );
}

export default CalendarPage;
