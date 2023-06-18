import React from 'react'
import { Routes,Route } from 'react-router-dom'
import LoginPage from './component/LoginPage'
import SingUpPage from './component/SingUpPage'
import Homepage from './component/Homepage'
import SingleUser from './component/SingleUser'

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
           <Route path="/" element={<Homepage />} ></Route>
           <Route path="/singleuserPage" element={<SingleUser />}></Route>
            <Route path="/login" element={<LoginPage />} ></Route>
            <Route path="/signup" element={<SingUpPage />} ></Route>
        </Routes>
    </div>
  )
}
