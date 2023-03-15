import React from 'react';
import { Routes, Route } from 'react-router';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Login from './components/Login';
import Mymusic from './components/Mymusic';
import Signup from './components/Signup';

const Routing = () => {
    return (
       <>
       <Routes>
         <Route path="/" element={ <Home/> } />
         <Route path="/about" element={ <About/> } />
         <Route path="/contact" element={ <Contact/> } />
         <Route path="/signup" element={ <Signup/> } />
         <Route path="/login" element={ <Login/> } />
         <Route path="/mymusic" element={<Mymusic/>} />
       </Routes>
       </>
    );
};

export default Routing;