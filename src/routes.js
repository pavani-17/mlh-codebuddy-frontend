import SignIn from 'layouts/authentication/sign-in';
import SignUp from 'layouts/authentication/sign-up';
import RoomView from 'layouts/room_view';
import Rooms from 'layouts/rooms';

// @mui icons
import Icon from '@mui/material/Icon';

const routes = [
  {
    type: 'collapse',
    name: 'Sign In',
    key: 'sign-in',
    icon: <Icon fontSize="small">login</Icon>,
    route: '/authentication/sign-in',
    component: <SignIn />,
  },
  {
    type: 'collapse',
    name: 'Sign Up',
    key: 'sign-up',
    icon: <Icon fontSize="small">assignment</Icon>,
    route: '/authentication/sign-up',
    component: <SignUp />,
  },
  {
    type: 'collapse',
    name: 'Room View',
    key: 'room-view',
    icon: <Icon fontSize="small">assignment</Icon>,
    route: '/room_view',
    component: <RoomView />,
  },
  {
    type: 'collapse',
    name: 'Rooms',
    key: 'rooms',
    icon: <Icon fontSize="small">rooms</Icon>,
    route: '/rooms',
    component: <Rooms />,
  },
];

export default routes;
