import { useState } from 'react'

import './App.css'
import { Home } from './Component/Home'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Component/Login'
import { Register } from './Component/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App
