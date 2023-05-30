import React, { useContext } from "react";
import "../Styles/Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from "react";
import Logo from "./Logo";
import { LoginContext } from "../App";
import axios from "axios";

function Navbar({ user, userName }) {
  const setContext = useContext(LoginContext);
  const [ham, setHam] = useState(false);

  async function handleLogOut() {
    let res = await axios.get("https://musicstudio.onrender.com/logout", {
      headers: { Authorization: localStorage.getItem("token") },
    });
    if (res.status === 200) {
      setContext.setUserLogin(false);
      setContext.setUserName("");
      localStorage.removeItem("token");
    } else {
      alert(res.data.message);
    }
  }
  return (
    <>
      <nav>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
        <div className="search-bar-container">
          <input
            type="text"
            className="search-bar"
            placeholder="search here..."
          />
          <span className="search-icon">
            <AiOutlineSearch />
          </span>
        </div>
        <ul className={ham ? "nav-list nav-list-show" : "nav-list"}>
          <NavLink to={"/"}>Home</NavLink>
          {/* <NavLink to={"/about"}>About</NavLink> */}
          <NavLink to={"/mymusic"}>Mymusic</NavLink>
          {!user ? (
            <NavLink to={"/login"}>Login</NavLink>
          ) : (
            <NavLink to={"/profile"} className="cxTitle">
              {userName}
            </NavLink>
          )}
          {!user ? (
            <NavLink to={"/signup"}>Sign up</NavLink>
          ) : (
            <button className="logOut" onClick={handleLogOut}>
              LogOut
            </button>
          )}
        </ul>
        <div onClick={() => setHam(!ham)} className="ham-container">
          <span className="ham"></span>
          <span className="ham"></span>
          <span className="ham"></span>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
