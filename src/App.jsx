import React, { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Header } from './Components/Header/Header'

function App() {
  return (
    <div className='main'>
      <Header/>
      <div className='footer'>
        <Navbar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default App
