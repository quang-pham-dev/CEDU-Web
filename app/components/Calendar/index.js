import React from 'react';
import PropTypes from 'prop-types';
import CalendarStyle from './style';
import FullCalendar from '@fullcalendar/react';
import daygrid from '@fullcalendar/daygrid';
import interaction from '@fullcalendar/interaction';
import timegrid from '@fullcalendar/timegrid';
import list from '@fullcalendar/list';
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import resourceTimeGridPlugin from '@fullcalendar/resource-timegrid'

import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
import '@fullcalendar/resource-timeline/main.css';

export const Calendar = ({ rooms }) => {
    return (
        <FullCalendar
            plugins={ [ resourceTimeGridPlugin, list ] }
            header={
                {
                    left: 'today prev,next',
                    center: 'title',
                    right: 'resourceTimeGridDay,resourceTimeGridWeek'
                }
            }
            defaultView='resourceTimeGrid'
            schedulerLicenseKey="GPL-My-Project-Is-Open-Source"
            resources={ rooms }
            resourceAreaWidth="15%"
            minTime="06:00:00"
            events= {
                [
                    {
                        title  : 'Room 101',
                        resourceId: '101',
                        start  : new Date(),
                    },
                    {
                        title  : 'Room 102',
                        resourceId: '102',
                        start  : new Date(),
                        allDay : true,
                    }
                ]
            }
        />
    )
}

Calendar.propTypes = {
    rooms: PropTypes.array
}

export default Calendar