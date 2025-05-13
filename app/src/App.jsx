import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login/Login.jsx';
import Home from './Home/Home.jsx'
import Cadastro from './Cadastro/Cadastro.jsx';

function App() {

  return (
    <> 
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='Cadastro' element={<Cadastro/>}/>
        <Route path='Login' element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App