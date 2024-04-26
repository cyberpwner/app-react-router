import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Github from './pages/Github/Github';
import NotFound from './pages/NotFound';
import UserDetails from './pages/Users/UserDetails';
import usersLoader from './pages/Users/loaders/UsersLoader';
import Users from './pages/Users/Users';
import userDetailsLoader from './pages/Users/loaders/UserDetailsLoader';
import githubLoader from './pages/Github/GithubLoader';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route
        path="github"
        element={<Github />}
        loader={githubLoader}
        errorElement={<ErrorPage />}
      />
      <Route path="users" errorElement={<ErrorPage />}>
        <Route index element={<Users />} loader={usersLoader} />
        <Route
          path=":userid"
          element={<UserDetails />}
          loader={userDetailsLoader}
        />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
