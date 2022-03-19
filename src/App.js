import './App.css';
import React from "react";
import { Route, Routes } from "react-router-dom";

import Admin from './component/Admin/Admin';
import User from './component/User/User';


function App() {
  return (
    <div className="App">
   
    
      
       <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/user" element={<User/>} />
     </Routes>
    </div>
  );
}

export default App;
