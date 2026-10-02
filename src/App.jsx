import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout'
import Advantages from './Pages/Advantages'
import About from './Pages/About'
import Brend from './Pages/Brend'
import Contract from './Pages/Contract'
import OpenGroup from './Pages/OpenGroup'
import Products from './Pages/Products'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Advantages />} />
        <Route path="/products" element={<Products />} />
        <Route path="/advantages" element={<Advantages />} />
        <Route path="/brend" element={<Brend />} />
        <Route path="/open-group" element={<OpenGroup />} />
        <Route path="/contract" element={<Contract />} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    </Routes>
  )
}

export default App
