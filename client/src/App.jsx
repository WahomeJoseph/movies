/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Moviecard from './components/MovieCard.jsx'
import { MovieProvider } from './context/MovieContext.jsx'
import { Favorites } from './pages/Favs.jsx'

export default function App() {
  return (
    <MovieProvider>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie' element={<Moviecard movie={{title: 'Power Book 2', release_date: '2025'}}/>}/>
      <Route path='/favs' element={<Favorites/>}/>
     </Routes>
    </MovieProvider>
  )
}


