import React from 'react';
import Home from '../src/Pages/Home';
import Academy from '../src/Pages/SereneAcademy';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/Academy"  element={<Academy/>} />
    
      </Routes>
      </BrowserRouter>

      
    
    </div>
  );
}

export default App;
