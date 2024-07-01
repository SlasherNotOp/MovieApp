import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "./Home"
import Header from './Header'
import Footer from './Footer'

function App() {
 

  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route element={<Home/>} path="/"></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
