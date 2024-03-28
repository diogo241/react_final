import ReactDOM from 'react-dom/client';
import './variables.css';
import './reset.css';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './components/layout/Root/Root';
import Error from './pages/Error/Error';
import Works from './pages/Works/Work';
import Blog from './pages/Blog/Blog';
import Home from './pages/Home/Home';
import WorkDetails from './pages/WorkDetails/WorkDetails';


const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <Root>
        <Home />
      </Root>
    ),
    errorElement: <Error />,
  },
  {
    path: '/works',
    element: (
      <Root>
        <Works />
      </Root>
    ),
    errorElement: <Error />,
  },
  {
    path: '/works/:id',
    element: (
      <Root>
        <WorkDetails />
      </Root>
    ),
    errorElement: <Error />,
  },
  {
    path: '/blog',
    element: (
      <Root>
        <Blog />
      </Root>
    ),
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>
);
