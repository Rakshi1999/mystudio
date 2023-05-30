// eslint-disable-next-line
import React, { Profiler } from "react";
import { Routes, Route } from "react-router";
import About from "./components/About";
import ErrorComponent from "./components/ErrorComponent";
import Home from "./components/Home";
import Login from "./components/Login";
import Mymusic from "./components/Mymusic";
import Signup from "./components/Signup";
import PageNotFound from "./components/PageNotFound";
import Profile from "./components/Profile";

const Routing = ({ collections, setSong, setUser, user }) => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/contact" element={ <Contact/> }/> */}
        {!user && <Route path="/signup" element={<Signup />} />}
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/mymusic"
          element={
            <ErrorComponent>
              <Mymusic collections={collections} setSong={setSong} />
            </ErrorComponent>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
