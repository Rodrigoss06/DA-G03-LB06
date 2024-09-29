import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Profile from './Profile'
import Details from './Details'
import Settings from './Settings'

function RouterB() {
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
        <Route path="/profile/*" element={<Profile />}>
          <Route path="details" element={<Details />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default RouterB