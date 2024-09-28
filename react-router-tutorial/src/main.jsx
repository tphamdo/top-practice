import { action as destroyAction } from './routes/destroy';
import { action as editAction } from './routes/edit';
import { action as contactAction } from './routes/contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { loader as rootLoader, action as rootAction } from './routes/root';
import { loader as contactLoader } from './routes/contact';
import { StrictMode } from 'react';
import Contact from './routes/contact';
import EditContact from './routes/edit';
import ErrorPage from './error-page';
import Index from './routes/index';
import Root from './routes/root';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    loader: rootLoader,
    action: rootAction,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: 'contacts/:contactId',
            element: <Contact />,
            loader: contactLoader,
            action: contactAction,
          },
          {
            path: 'contacts/:contactId/edit',
            element: <EditContact />,
            loader: contactLoader,
            action: editAction,
          },
          {
            path: 'contacts/:contactId/destroy',
            action: destroyAction,
            errorElement: <div>Oop! There was an error.</div>,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
