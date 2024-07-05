import React from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Practice from './apps/practice';
import Root from 'src/main';

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
            lazy:()=>import('views/practice/translate')
            // lazy:()=>(import('src/views/practice/translate'))
          },
          {
            path: "translate",
            lazy:()=>import('src/views/practice/translate')
            // element: <Translate />,
          },
          {
            path: "search",
            lazy:()=>import('src/views/practice/search')
          },
          {
            path: "pdf",
            lazy:()=>import('src/views/practice/pdf-viewer')
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

