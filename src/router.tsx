import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SearchPage from 'views/SearchPage';
import Practice from './apps/practice';
import Root from 'views/Root';
import Translate from 'views/translate';

// 引入组件
// import Films from '../views/Films'

const routes = [
  {
    element: <Root />,
    path: "/", // with this data loaded before rendering
    // loader: async ({ request, params }) => {
    //   return fetch(
    //     `/fake/api/teams/${params.teamId}.json`,
    //     { signal: request.signal }
    //   );
    // },

    // performing this mutation when data is submitted to it
    action: async ({ request }) => {
      // return updateFakeTeam(await request.formData());
    },
    children: [
      {
        element: <Practice />,
        path: '/',
        children: [
          {
            element: <Translate />,
            path: '/',
          },
          {
            element: <Translate />,
            path: '/practice',
          },
          {
            element: <Translate />,
            path: '/practice/translate',
          },
          {
            element: <Translate />,
            path: '/practice/translate',
          },
        ]
      },

    ]
    // and renders this element in case something went wrong
    // errorElement: <ErrorBoundary />,
  },

]

const router = createBrowserRouter(routes)

export const Router = () => {
  return <RouterProvider router={router} />;
};

