import './App.css';
import React from "react";
import { BrowserRouter,Route, Routes } from "react-router-dom";

import Admin from './component/Admin/Admin';
import User from './component/User/User';
import Profile from './component/User/Profile';
import Buy from './component/User/Profile';
import Home from './component/User/Home';




function App() {
  return (
    <BrowserRouter>
    
       <Routes>
       <Route exact path="/" element={<User/>}>
       <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="buy" element={<Buy />} />
       </Route>
        <Route exact path="/admin" element={<Admin />} />
     </Routes>
   

    </BrowserRouter>
  );
}

export default App;
