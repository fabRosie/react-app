import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './views/Home';

// 引入组件
// import Films from '../views/Films'
// import Cinemas from '../views/Cinemas'
// import Center from '../views/Center'
// import Home from '../views/Home'

const routes = [
  {
    // it renders this element
    element: <Home />,

    // when the URL matches this segment
    path: "/",


    // with this data loaded before rendering
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

    // and renders this element in case something went wrong
    // errorElement: <ErrorBoundary />,
  },
  // {
  //   element: <Films />,
  //   path: "/films",
  // },
  // {
  //   element: <Cinemas />,
  //   path: "/cinemas",
  // },
  // {
  //   element: <Center />,
  //   path: "/center",
  // },
]

const router = createBrowserRouter(routes)

export const Router = () => {
  return <RouterProvider router={router} />;
};

