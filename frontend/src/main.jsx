import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'

function App(){
  return (
    <BrowserRouter>
      <nav style={{padding:12}}>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(<App />)
