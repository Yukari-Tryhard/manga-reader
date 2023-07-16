import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import HomePage from './pages/home/HomePage.tsx';
import DetailPage from './pages/detail/DetailPage.tsx';
import ReadPage from './pages/read/ReadPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "home",
        element: <HomePage></HomePage>,
        index: true
      },
      {
        path: "detail",
        element: <DetailPage></DetailPage>
      },
      {
        path: 'read',
        element: <ReadPage></ReadPage>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
