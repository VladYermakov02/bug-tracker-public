import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/other/Login';
import Dashboard from './pages/left-side-navbar/Dashboard';
import Tickets from './pages/left-side-navbar/Tickets';
// eslint-disable-next-line import/no-named-as-default
import HomeNavbar from './components/Navbar/HomeNavbar';
import MaybeShowNavbar from './components/Navbar/MaybeShowNavbar';
import Organization from './pages/left-side-navbar/Organization';
import Notifications from './pages/left-side-navbar/Notifications';
import { UserProvider, useUser } from './web/UserProvider';
import PrivateRoute from './web/PrivateRoute';
import Project from './pages/other/Project';

export function App() {
  /* NEEDED CODE */
  // params are getter and setter to json web token
  // keeps value of jwt in local browser storage
  const [roles, setRoles] = useState([]);

  const user = useUser();

  function getRolesFromJWT() {
    try {
      if (user.jwt) {
        const decodedJwt: any = jwt_decode(user.jwt);
        return decodedJwt.authorities;
      }
    } catch (error: any) {
      if (error.message === 'Invalid token specified') {
        console.log('Invalid token');
      } else {
        console.log('Error decoding token:', error.message);
      }
      return [];
    }
    return null;
  }

  useEffect(() => {
    setRoles(getRolesFromJWT());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.jwt]);

  return (
    <div className="default-background-color default-font-color">
      <MaybeShowNavbar>
        <HomeNavbar />
      </MaybeShowNavbar>
      <Routes>
        <Route path="/login" element={<Login />} />
        {/* '*' means http://localhost:5173/#/smth - here it would work, if i just change the link nothing would happen */}

        {/* TODO: delete it from here later */}
        <Route
          path="/project"
          element={
            <PrivateRoute>
              <Project />
            </PrivateRoute>
          }
        />

        <Route
          path="*"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/tickets"
          element={
            <PrivateRoute>
              <Tickets />
            </PrivateRoute>
          }
        />
        <Route
          path="/organization"
          element={
            <PrivateRoute>
              <Organization />
            </PrivateRoute>
          }
        />
        <Route
          path="/notifications"
          element={
            <PrivateRoute>
              <Notifications />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

// with this it would be easier to test later
export function WrappedApp() {
  return (
    <BrowserRouter>
      {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
      <>
        <UserProvider>
          <div>
            <App />
          </div>
        </UserProvider>
      </>
    </BrowserRouter>

    // for future
    //   <BrowserRouter>
    //   <React.Fragment>
    //     <UserProvider>
    //       <div>
    //         <App />
    //       </div>
    //     </UserProvider>
    //   </React.Fragment>
    // </BrowserRouter>
  );
}
