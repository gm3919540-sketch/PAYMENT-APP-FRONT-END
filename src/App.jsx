import { useState } from 'react'

import './App.css'
import { Home } from './Component/Home'
import { Route, Routes } from 'react-router-dom'
import { Login } from './Component/Login'
import { Register } from './Component/Register'
import { UserDashboard } from './Component/UserDashboard'
import ProtectedRoute from './utils/ProtectedRoute'
import { Transfer } from './Component/Transfer'
import { Transactions } from './Component/Transactions'
import { Admindashboard } from './Component/Admindashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route
             path="/user/dashboard"
             element={
               <ProtectedRoute>
                   <UserDashboard />
                      </ProtectedRoute>
                   }
                       />
      <Route path='/register' element={<Register/>}/>
      <Route path='/transfer' element={
        <ProtectedRoute>
        <Transfer/>
        </ProtectedRoute>
         }></Route>
      <Route path='/transactions' element={
                     <ProtectedRoute>
                    <Transactions/>
                    </ProtectedRoute>
       } />

       <Route path='/admin/dashboard' element ={
            <ProtectedRoute>
              <Admindashboard />
            </ProtectedRoute>
       } />
           
    </Routes>
    </>
  )
}

export default App
