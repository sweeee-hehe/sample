import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login from './auth/login'
import Signup from './auth/signup'
function App()
{
  return (
    <Login/>,
    <Signup/>
  )
}

export default App
