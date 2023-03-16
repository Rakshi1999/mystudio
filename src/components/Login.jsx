import React from 'react';
import { useNavigate } from 'react-router';
import '../Styles/Login.css'
import Logo from './Logo';

function Login(props) {

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        navigate("/");
    }
    
    return (
        <>
        <div className="loginBody">
         <div className='loginOutline'>
             <div className='loginLogo'>{<Logo/>}</div>
             <form onSubmit={handleSubmit}>
                 <label htmlFor='userEmail'>Email</label>
                 <input type="email" id="userEmail"/>
                 <label htmlFor='userEmail'>Password</label>
                 <input type="password" id="userPassword"/>
                 <button type='submit'>Login</button>
             </form>
         </div>
        </div>
        </>
    );
}

export default Login;