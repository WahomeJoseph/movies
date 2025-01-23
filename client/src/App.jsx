import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Moviecard } from './components/MovieCard'

export default function App() {
  return (
    <Router>
     <Navbar/>
     <Routes>
      <Route path='/movie' element={<Moviecard/>}/>
     </Routes>
    </Router>
  )
}


