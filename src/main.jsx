import React from 'react'
import ReactDOM from 'react-dom/client'
import Inserimento from './inserimento'
import { BrowserRouter as Router, Route, Link, createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
{
  path: "/", 
  element: <Inserimento />,
  //errorElement: <ErrorPage/>,
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)