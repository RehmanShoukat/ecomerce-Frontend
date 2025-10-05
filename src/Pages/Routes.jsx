import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Frontend from './Frontend'
import Auth from './Auth'

const Index = () => {
  // const {isAuth} = useAuthContext()
  return (
    <Routes>
        <Route path='/*' element={<Frontend/>}/>
        <Route path='auth/*' element={ <Auth/>}/>
    </Routes>
  )
}

export default Index