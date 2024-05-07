import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import ProfilePage from '../pages/ProfilePage';
import NotFoundPage from '../pages/NotFoundPage';

// createBrowserRouter : FN(Array<RouterObject>)
// RouterProvider : Component
// NestedRoute : เขียน Key children เพิ่ม
// profile : "/profile" , feed : ""
const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  {
    path: '/',
    element: (
      <h1>
        Layout
        <Outlet />
      </h1>
    ),
    children: [
      { path: '', element: <HomePage /> },
      { path: 'profile', element: <ProfilePage /> },
    ],
  },
  { path: '*', element: <NotFoundPage /> },
]);

function Router() {
  return <RouterProvider router={router} />;
}

export default Router;
