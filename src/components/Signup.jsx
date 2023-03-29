import React, { useRef, useState } from 'react';
import '../Styles/Signup.css'
import Logo from './Logo';

import {useNavigate} from 'react-router-dom';

function Signup(props) {

    const navigate = useNavigate();
    const userNameRef = useRef();
    const userEmailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();

    function handleSubmit(e){
        e.preventDefault();
        const userObj = {
            userName: userNameRef.current.value,
            email: userEmailRef.current.value,
            password: passwordRef.current.value,
        }

        let data = localStorage.getItem("userList");

        if(data){
            let arr = JSON.parse(data);
            arr.push(userObj);
            localStorage.setItem("userList",JSON.stringify(arr));
            navigate('/login');
        }else{
            let arr =[];
            arr.push(userObj);
            localStorage.setItem("userList",JSON.stringify(arr));
            navigate('/login');
        }
    }

    function handleConfirm(e){
        e.preventDefault();

        if(confirmPasswordRef.current.value !== passwordRef.current.value){
            confirmPasswordRef.current.style.outlineColor="red";
        }else{
            confirmPasswordRef.current.style.outlineColor="green";
        }

    }

    return (
        <>
        <div className='signupFormContainer'>
            <div className='formContainer'>
                <div className='signupLogo'>{<Logo/>}</div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="userName">User Name</label>
                    <input id='userName' ref={userNameRef} required/>
                    <label htmlFor="userEmail">Email</label>
                    <input id='userEmail'type="email" ref={userEmailRef} required/>
                    <label htmlFor="userPassword">Password</label>
                    <input id='userPassword' type="password" ref={passwordRef} required/>
                    <label htmlFor="userConfirm">Confirm Password</label>
                    <input id='userConfirm' type="password" ref={confirmPasswordRef} required onChange={handleConfirm}/>
                    <button type='submit'>SignUp</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Signup;