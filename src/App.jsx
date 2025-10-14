import React from 'react'
import { Route, Routes } from 'react-router'
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen'
import { LoginScreen } from './Screens/LoginScreen/LoginScreen'
import AuthMiddleware from './Middlewares/AuthMiddlewares.jsx'
import SlackApp from "./slack/pages/SlackApp.jsx";

function App() {

  return (

    <Routes>
      <Route path='/' element={<LoginScreen/>} />
      <Route path='/login' element={<LoginScreen/>} />
      <Route path='/register' element={<RegisterScreen/>} />
      <Route element={<AuthMiddleware/>}>
        <Route path='/home' element={<SlackApp />}/>
      </Route>
    </Routes>

  )
}

export default App 



