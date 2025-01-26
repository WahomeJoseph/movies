/* eslint-disable no-unused-vars */
import React from 'react'
import { Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import { MovieProvider } from './context/MovieContext.jsx'
import { Favorites } from './pages/Favs.jsx'

export default function App() {
  return (
    <MovieProvider>
     <Navbar/>
     <main>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/favs' element={<Favorites/>}/>
     </Routes>
     </main>
     
    </MovieProvider>
  )
}


