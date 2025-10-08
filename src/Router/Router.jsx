import React from 'react';
import { createBrowserRouter } from "react-router";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import MainLayout from '../Layout/MainLayout';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            Component:Home
        }
    ]
  },
]);