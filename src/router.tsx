import React from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Practice from './apps/practice';
import Root from 'src/main';
import Translate from 'views/practice/translate';
import Search from 'views/practice/search';

// 引入组件
// import Films from '../views/Films'

const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true, // 根路径的默认子路由
        element: <Practice />,
      },
      {
        path: "practice",
        element: <Practice />,
        children: [
          {
            index: true, // 默认子路由，不需要 path 属性
            element: <Translate />,
          },
          {
            path: "translate",
            element: <Translate />,
          },
          {
            path: "search",
            element: <Search />,
          },
        ],
      },
      {
        path: "root",
        element: <Navigate to="/practice" replace />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

export const Router = () => {
  return <RouterProvider router={router} />;
};

