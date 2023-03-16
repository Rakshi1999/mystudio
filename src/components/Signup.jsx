import React, { useRef } from 'react';
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
        // navigate('/login');

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
        }else{
            let arr =[];
            arr.push(userObj);
            localStorage.setItem("userList",JSON.stringify(arr));
        }
    }
    return (
        <>
        <div className='signupFormContainer'>
            <div className='formContainer'>
                <div className='signupLogo'>{<Logo/>}</div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="userName">User Name</label>
                    <input id='userName' ref={userNameRef}/>
                    <label htmlFor="userEmail">Email</label>
                    <input id='userEmail' ref={userEmailRef}/>
                    <label htmlFor="userPassword">Password</label>
                    <input id='userPassword' ref={passwordRef}/>
                    <label htmlFor="userConfirm">Confirm Password</label>
                    <input id='userCOnfirm' ref={confirmPasswordRef}/>
                    <button type='submit'>SignUp</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Signup;