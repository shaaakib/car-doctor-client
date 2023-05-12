import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../Pages/Home/Home/Home';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import CheckOut from '../Pages/CheckOut/CheckOut';
import Bookings from '../Pages/Bookings/Bookings';
import PrivateRoutes from './PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'checkout/:id',
        element: <CheckOut />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/serviecs/${params.id}`),
      },
      {
        path: 'bookings',
        element: (
          <PrivateRoutes>
            <Bookings />
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
export default router;
