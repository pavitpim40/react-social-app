import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import NotFoundPage from '../pages/NotFoundPage';

// createBrowserRouter : FN(Array<RouterObject>)
// RouterProvider : Component
const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/profile', element: <ProfilePage /> },
  { path: '*', element: <NotFoundPage /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
