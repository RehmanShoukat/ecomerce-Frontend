import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'
import { useAuthContext } from '../context/AuthContext'

const Index = () => {
  const {isAuth} = useAuthContext()
  return (
    <Routes>
        <Route path='/*' element={<Frontend/>}/>
        <Route path='auth/*' element={!isAuth ? <Auth/> : <Navigate to="/"/>}/>
    </Routes>
  )
}

export default Index