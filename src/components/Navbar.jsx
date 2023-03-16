import React from 'react';
import '../Styles/Navbar.css';
import {NavLink} from 'react-router-dom';
import { AiOutlineSearch } from "react-icons/ai";
import {useState} from 'react';
import Logo from './Logo';

function Navbar(props) {

    //  function Logo(){
    //     return(
    //         <div className='logo'>
    //             <div className='logo-bars'>
    //                 <span className='bar first'>s</span>
    //                 <span className='bar'></span>
    //                 <span className='bar middle'>s</span>
    //                 <span className='bar'></span>
    //                 <span className='bar last'>s</span>
    //             </div>
    //             <div className='logo-title'>Music Studio</div>
    //         </div>
    //     )
    // }

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
                <NavLink to={"/about"}>About</NavLink>
                <NavLink to={"/mymusic"}>Mymusic</NavLink>
                <NavLink to={"/login"}>Login</NavLink>
                <NavLink to={"/signup"}>Sign up</NavLink>
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