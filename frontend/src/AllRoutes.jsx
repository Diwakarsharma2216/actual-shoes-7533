import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LoginPage from './component/LoginPage'
import SingUpPage from './component/SingUpPage'
import Homepage from './component/Homepage'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Homepage />} ></Route>
            <Route path="/login" element={<LoginPage />} ></Route>
            <Route path="/signup" element={<SingUpPage />} ></Route>
        </Routes>
    </div>
  )
}
