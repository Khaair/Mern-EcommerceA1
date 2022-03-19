import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";

import Admin from './component/Admin/Admin';
import User from './component/User/User';
import Profile from './component/User/Profile';
import Buy from './component/User/Buy';


function App() {
  return (
    <div className="App">
   
    
      
       <Routes>
       <Route path="/" element={<User/>} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/buy" element={<Buy />} />
       
     </Routes>
    </div>
  );
}

export default App;
