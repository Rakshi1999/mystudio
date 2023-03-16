import React from 'react';
import '../Styles/Navbar.css';
import {NavLink} from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import {useState} from 'react';
import Logo from './Logo';

function Navbar({user,userName}) {

    const [ham,setHam] = useState(false);
    return (
        <>
        <nav>
            <Logo/>
            <div className='search-bar-container'>
                <input type="text" className='search-bar'placeholder='search here...'/>
                <span className='search-icon'><AiOutlineSearch/></span>
            </div>
            <ul className={ ham ? "nav-list nav-list-show"    : "nav-list"}>
                <NavLink to={"/"}>Home</NavLink>
                {/* <NavLink to={"/about"}>About</NavLink> */}
                <NavLink to={"/mymusic"}>Mymusic</NavLink>
                {!user ? <NavLink to={"/login"}>Login</NavLink> : <NavLink to={'/'}>{userName}</NavLink>}
                {/* <NavLink to={"/login"}>Login</NavLink> */}
                {!user && <NavLink to={"/signup"}>Sign up</NavLink>}
            </ul>
                <div onClick={()=>setHam(!ham)} className='ham-container'>
                <span className='ham'></span>
                <span className='ham'></span>
                <span className='ham'></span>
                </div>
        </nav>
        </>
    );
}

export default Navbar;