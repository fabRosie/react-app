import React, { Component } from 'react'
import { BrowserRouter, HashRouter,Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'

// 引入组件
import Films from '../views/Films'
import Cinemas from '../views/Cinemas'
import Center from '../views/Center'

const routes = [
  {
    // it renders this element
    element: <Films />,

    // when the URL matches this segment
    path: "/",

    // with this data loaded before rendering
    loader: async ({ request, params }) => {
      return fetch(
        `/fake/api/teams/${params.teamId}.json`,
        { signal: request.signal }
      );
    },

    // performing this mutation when data is submitted to it
    action: async ({ request }) => {
      // return updateFakeTeam(await request.formData());
    },

    // and renders this element in case something went wrong
    // errorElement: <ErrorBoundary />,
  },
  {
    element: <Films />,
    path: "/films",
  },
  {
    element: <Cinemas />,
    path: "/cinemas",
  },
  {
    element: <Center />,
    path: "/center",
  },
]

const router = createBrowserRouter(routes, {
  basename: '/app'
})

export default class indexRouter extends Component {
  render() {
    return (
        <RouterProvider basename="/app" router={router} />
    )
  }
}
