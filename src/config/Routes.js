import PrivateRoutes from '../features/privateRoutes/PrivateRoutes';
import Splash from '../features/splashScreen/Splash';
import Login from '../features/login/Login';
import Register from '../features/register/Register';
import Home from '../features/home/Home';
import CarDetails from '../features/cars/cardetails/CarDetails';
import Newcar from '../features/cars/newcar/Newcar';
import DeleteCar from '../features/cars/deletecar/DeleteCar';
import Reserve from '../features/reservation/reserve/Reserve';
import MyReservations from '../features/reservation/myreservations/MyReservations';

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
    path: '/signup',
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
        path: '/myreservations',
        element: <MyReservations />,
      },
      {
        path: '/newcar',
        element: <Newcar />,
      },
      {
        path: '/delete-car',
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
