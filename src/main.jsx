import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Index from './routes'
import Root, {
  loader as rootLoader,
  action as rootAction
} from './routes/root'
import Contact, {
  loader as contactLoader,
  action as contactAction
} from './routes/contact'
import EditContact, {
  action as EditAction
} from './routes/edit'
import { action as destroyAction } from './routes/destroy'
import ErrorPage from './error-page'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader,
    action: rootAction,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <Index /> },
          {
            path: 'contacts/:id',
            element: <Contact />,
            loader: contactLoader,
            action: contactAction
          },
          {
            path: 'contacts/:id/edit',
            element: <EditContact />,
            loader: contactLoader,
            action: EditAction
          },
          {
            path: 'contacts/:id/destroy',
            action: destroyAction,
            errorElement: <div>Oops! There was an errror.</div>
          }
        ]
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
