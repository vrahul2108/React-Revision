import { useState } from 'react'
import { UserContextProvider } from './context/UserContextProvider'
import Profile from './components/Profile'
import Login from './components/Login'
import './App.css'


function App() {
  

  return (
    <UserContextProvider>
      
      <Login />
      <Profile/>
      
    </UserContextProvider>
  )
}

export default App
