import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './Navbar'
import './App.css'
import { Route,Routes } from 'react-router-dom'
import Login from './Login'
import SignUp from './SignUp'

function App() {

  return (
    <>
      <Navbar/> 
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
