import React from 'react';
import { createBrowserRouter } from "react-router";
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import MainLayout from '../Layout/MainLayout';
import Apps from '../Pages/Apps/Apps';
import Installation from '../Pages/Installation/Installation';
import SearchError from '../Pages/SearchError/SearchError';
import AppDetails from '../Pages/AppsDetails/AppDetails';
export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
            loader:() => fetch('/AppsData.json'),
            Component:Home
        },
        {
          path:'/apps',
          loader:() => fetch('/AppsData.json'),
          Component:Apps
        },
        {
          path:'/installation',
          loader:() => fetch('/AppsData.json'),
          Component:Installation
        },
        {
          path:'/appsError',
          Component:SearchError
        },
        {
          path:"/appDetails/:id",
          loader:() => fetch('/AppsData.json'),
          Component:AppDetails
        }
    ]
  },
]);