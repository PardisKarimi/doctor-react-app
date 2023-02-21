import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Signupdoctor from "./components/Signup/Signupdoctor"
import Signuppatient from "./components/Signup/Signuppatient"

function App() {
  return (
    <div className='App'>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Signupdoctor/*" element={<Signupdoctor/>} />
          <Route path="/Signuppatient/*" element={<Signuppatient/>} />
          <Route path="/Login/*" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
