import React from 'react';
import { Routes, Route } from 'react-router';
import About from './components/About';
import Contact from './components/Contact';
import ErrorComponent from './components/ErrorComponent';
import Home from './components/Home';
import Login from './components/Login';
import Mymusic from './components/Mymusic';
import Signup from './components/Signup';


const Routing = ({collections,setSong}) => {
    return (
       <>
       <Routes>
         <Route path="/" element={ <Home/> } />
         <Route path="/about" element={ <About/> }/>
         {/* <Route path="/contact" element={ <Contact/> }/> */}
         <Route path="/signup" element={ <Signup/> } />
         <Route path="/login" element={ <Login/> } />
         <Route path="/mymusic" element={<ErrorComponent><Mymusic collections={collections} setSong={setSong}/></ErrorComponent>} />
       </Routes>
       </>
    );
};

export default Routing;