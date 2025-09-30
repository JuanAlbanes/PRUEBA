import React from 'react'
import { Route, Routes } from 'react-router'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen.jsx'
import {LoginScreen} from './Screens/LoginScreen/LoginScreen.jsx'





function App() {

  return (
      <Routes>
        <Route path='/login' element={<LoginScreen/>}/> 
        <Route path='/register' element={<RegisterScreen/>}/>
      </Routes>
  )
}

export default App
