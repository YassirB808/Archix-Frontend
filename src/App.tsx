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
import { SettingView } from 'pages/SettingView';
import { AboutUs } from 'pages/About'; 
import { PrivacyPolicy } from 'pages/Privacy';
import { TermsOfService } from 'pages/TermsOfService';
import { CookiePolicy } from 'pages/CookiePolicy';

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
  ,
  {
    path: '/dashboard/settings',
    element: <SettingView />,
  }
  ,
  { 
    path: '/about',
    element: <AboutUs />,
  }
  ,
  { 
    path: '/privacy',
    element: <PrivacyPolicy />,
  }
  ,
  { 
    path: '/tos',
    element: <TermsOfService />,
  }
  ,
  { 
    path: '/cookie',
    element: <CookiePolicy />,
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;