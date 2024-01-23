import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import Home from './pages/Home/index'
import Footer from './components/Footer'

function App() {
  return (
    
    <Router >
    <Navbar />
    <Routes>   
         <Route exact path="/" element={   <Home /> } />
     </Routes> 
     <Footer />
   </Router>
  );
}

export default App;
