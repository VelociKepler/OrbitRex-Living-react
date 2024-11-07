import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <h1 className='text-5xl font-bold text-center mt-10'>OrbitRex Living Project</h1>
      <Routes>
        <Route path="/" />
      </Routes>
    </Router>
  )
}

export default App

