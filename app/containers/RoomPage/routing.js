import PublicRoomPage from 'containers/RoomPage/Pages/PublicRoomPage/Loadable';
import PrivateRooms from 'containers/RoomPage/Pages/PrivateRoomPage/Loadable';
import MyRooms from 'containers/RoomPage/Pages/MyRoomPage/Loadable';
import NewRoom from 'containers/RoomPage/Pages/NewRoomPage/Loadable';
export const routes = [
  {
    url: '/room/public',
    text: 'Public Room',
    component: PublicRoomPage,
  },
  {
    url: '/room/private',
    text: 'Private Room',
    component: PrivateRooms,
  },
  {
    url: '/room/me',
    text: 'My Rooms',
    component: MyRooms,
  },
  {
    url: '/room/new',
    text: '+ New Room',
    component: NewRoom,
  },
];
