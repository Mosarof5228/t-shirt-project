import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Admin from './components/Admin/Admin';
import HomeLayout from './components/HomeLayout/HomeLayout';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Admin></Admin>,
    children: [
      {
        path: '/',
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch('data.json')
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
