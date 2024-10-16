import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import ProductPage from './Pages/ProductPage'
import Login from './Pages/Login'
import Registration from './Pages/Registration'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
