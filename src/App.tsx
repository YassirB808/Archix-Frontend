// src/App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MainAppPage } from './pages/MainAppPage';
import { Register } from './pages/Register';
import { Login } from 'pages/Login';
import { Pricing } from './pages/Pricing';
import { Dashboard } from 'pages/Dashboard';
import { DocumentView } from 'pages/DocumentView';
import { TeamsView } from 'pages/TeamsView';
import { NotificationsView } from 'pages/NotificationsView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/home',
    element: <MainAppPage />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/pricing',
    element: <Pricing />,
  }, 
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/dashboard/documents',
    element: <DocumentView />,
  }
  ,
  {
    path: '/dashboard/teams',
    element: <TeamsView />,
  }
  ,
  {
    path: '/dashboard/notifications',
    element: <NotificationsView />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;