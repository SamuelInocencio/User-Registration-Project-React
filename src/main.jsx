import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import router from './routes.jsx';

import Home from './pages/Home';
import ListUsers from './pages/ListUsers/index.jsx';
import GlobalStyles from './styles/GlobalStyles.js';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyles />
    <RouterProvider router={router} />
  </StrictMode>,
);
