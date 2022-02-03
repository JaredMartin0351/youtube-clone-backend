import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link, 
    Navigate,
  } from 'react-router-dom';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";








function App() {

  
  const [user, setUser] = useState(null);

  


  return (
    <div>
        <Routes>
          <Route exact path='/*' element={<Home user={user}/>} />
          <Route path='/login/' element={<Login setUser={setUser}/>} />
          <Route path='/register/' element={<Register/>} />        
        </Routes>
    </div>
  ) 

}

export default App;



