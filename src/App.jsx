import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import ProductPage from './Pages/ProductPage'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product' element={<ProductPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
