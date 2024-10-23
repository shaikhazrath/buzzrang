import React from 'react'
import LandingPage from './Landingpage'

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Privacy from './Privacy'

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
    </BrowserRouter>
    )
}

export default App