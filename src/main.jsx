import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Component/Root.jsx';
import Home from './Component/Home.jsx';
import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import AuthProvider from './Component/Context.jsx';
import Profile from './Component/Profile.jsx';
import PrivateRouter from './Component/PrivateRouter.jsx';

const router = createBrowserRouter([
 {
  path: '/',
  element: <Root/>,
  children: [
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/profile', element: <PrivateRouter><Profile /> </PrivateRouter>},
  ]
 }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
