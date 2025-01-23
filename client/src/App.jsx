/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Moviecard } from './components/MovieCard'
import { MovieProvider } from './context/MovieContext'
import { Favorites } from './pages/Favs'

export default function App() {
  return (
    <MovieProvider>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movie' element={<Moviecard/>}/>
      <Route path='/favs' element={<Favorites/>}/>
     </Routes>
    </MovieProvider>
  )
}


