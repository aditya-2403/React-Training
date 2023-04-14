import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Home from './components/Home';
import React,{useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';


function App() {

  return (
    <>
    <BrowserRouter basename="/">
    <Routes>
    <Route exact path='/' element={<Home />}/>
      <Route exact path='/about' element={<About/>}/>  
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
