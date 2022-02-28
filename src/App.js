
import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './component/Home';
import Navbar from './component/Navbar';
import Profile from './component/Profile';
import Buy from './component/Buy';


function App() {
  return (
    <div className="App">
   
    
       <Navbar/>
       <Routes>
     <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Buy" element={<Buy />} />
     </Routes>
    </div>
  );
}

export default App;
