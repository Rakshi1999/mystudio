import React from 'react';
import { Routes, Route } from 'react-router';
import About from './components/About';
import ErrorComponent from './components/ErrorComponent';
import Home from './components/Home';
import Login from './components/Login';
import Mymusic from './components/Mymusic';
import Signup from './components/Signup';
import PageNotFound from "./components/PageNotFound";

const Routing = ({ collections, setSong, setUser, user }) => {
  return (
    <>
      <Routes>
        <Route path="https://musicstudio.onrender.com/" element={<Home />} />
        <Route
          path="https://musicstudio.onrender.com/about"
          element={<About />}
        />
        {/* <Route path="/contact" element={ <Contact/> }/> */}
        {!user && (
          <Route
            path="https://musicstudio.onrender.com/signup"
            element={<Signup />}
          />
        )}
        <Route
          path="https://musicstudio.onrender.com/login"
          element={<Login setUser={setUser} />}
        />
        <Route
          path="https://musicstudio.onrender.com/mymusic"
          element={
            <ErrorComponent>
              <Mymusic collections={collections} setSong={setSong} />
            </ErrorComponent>
          }
        />
        <Route
          path="https://musicstudio.onrender.com/*"
          element={<PageNotFound />}
        />
      </Routes>
    </>
  );
};

export default Routing;