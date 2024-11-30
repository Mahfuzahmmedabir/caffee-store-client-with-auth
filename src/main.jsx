import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './components/Layout.jsx';
import Home from './components/Home.jsx';
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import Singin from './components/Singin.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import User from './components/Users.jsx';
import Login from './components/Login.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      // {
      //   path: '/',
      //   element: <Home></Home>,
      //   loader: () => fetch('http://localhost:5000/caffee'),
      // },
      {
        path: 'addCoffee',
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: 'updateCoffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/caffee/${params.id}`),
      },
      {
        path: '/singin',
        element: <Singin></Singin>,
      },
      {
        path: '/singup',
        element: <Login></Login>,
      },
      {
        path: '/user',
        element: <User></User>,
        loader: () => fetch('http://localhost:5000/user'),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
