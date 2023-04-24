import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginRegister from './components/login-registration'
import Login from './pages/Login'
import Signup from './pages/Signup'
import {Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
    {/* <LoginRegister/> */}
    
    <Routes>
    <Route path ='/' element={<Login />}/>
<Route path ='/signup' element={<Signup />}/>
    </Routes>
    {/*  */}
    </>
  )
}

export default App
