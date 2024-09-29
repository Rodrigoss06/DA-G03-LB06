import React from 'react'
import { Route, Router, Routes } from 'react-router-dom';
import Details from '../RutasAnidadas/Details';
import Settings from '../RutasAnidadas/Settings';
import Profile from '../RutasAnidadas/Profile';

function RouterC() {
    return (
        <Router>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/profile">Perfil</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/*" element={
              <PrivateRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </PrivateRoute>
            }>
              <Route path="details" element={<Details />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Routes>
        </Router>
      );
}

export default RouterC