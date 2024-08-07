import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Header from './Header'
import Footer from './Footer'
import SearchMoviePage from './SearchMoviePage'
import MovieTab from './MovieTab'

function App() {
 

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route element={<Home/>} path="/"></Route>
        <Route element={<SearchMoviePage/>} path="/search/:searchTerm"></Route>
        <Route element={<MovieTab/>} path="/movie/:id"></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
