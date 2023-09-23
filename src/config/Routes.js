import PrivateRoutes from '../components/privateRoutes/PrivateRoutes';
import Splash from '../components/splashScreen/Splash';
import Login from '../components/login/Login';
import Register from '../components/register/Register';
import Home from '../components/home/Home';
import CarDetails from '../components/cars/cardetails/CarDetails';
import Newcar from '../components/cars/newcar/Newcar';
import DeleteCar from '../components/cars/deletecar/DeleteCar';
import Reserve from '../components/reservation/reserve/Reserve';
import MyReservations from '../components/reservation/myreservations/MyReservations';

const routes = [
  {
    path: '/',
    element: <Splash />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    element: <PrivateRoutes />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
      {
        path: '/reserve/:id',
        element: <Reserve />,
      },
      {
        path: '/reservation',
        element: <MyReservations />,
      },
      {
        path: '/newcar',
        element: <Newcar />,
      },
      {
        path: '/deletecar',
        element: <DeleteCar />,
      },
      {
        path: '/car/:id',
        element: <CarDetails />,
      },
    ],
  },
];

export default routes;
