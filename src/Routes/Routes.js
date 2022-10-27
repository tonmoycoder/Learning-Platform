import { createBrowserRouter } from 'react-router-dom';
import Blog from '../Components/Pages/Blog/Blog';
import CheckOut from '../Components/Pages/CheckOut/CheckOut';
import Error from '../Components/Pages/Error/Error';
import FAQPage from '../Components/Pages/FAQ/FAQPage';
import Home from '../Components/Pages/Home/Home';
import LogIn from '../Components/Pages/LogIn/LogIn';
import Register from '../Components/Pages/Register/Register';
import Main from '../Layouts/Main';
import PrivateRoute from '../Private/PrivateRoute';
import Category from '../Components/Pages/Category/Category';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () =>
          fetch(
            'https://learning-platform-website-server-side-assignment-tonmoycoder.vercel.app/courses'
          ),
      },
      {
        path: '/login',
        element: <LogIn></LogIn>,
      },
      {
        path: '/category/:id',
        element: <Category></Category>,
        loader: ({ params }) =>
          fetch(
            `https://learning-platform-website-server-side-assignment-tonmoycoder.vercel.app/category/${params.id}`
          ),
      },
      {
        path: '/courses/:id',
        element: (
          <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://learning-platform-website-server-side-assignment-tonmoycoder.vercel.app/courses/${params.id}`
          ),
      },
      {
        path: '/register',
        element: <Register></Register>,
      },

      {
        path: '/faq',
        element: <FAQPage></FAQPage>,
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: '/*',
    element: <Error></Error>,
  },
]);
