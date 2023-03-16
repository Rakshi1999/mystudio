import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import '../Styles/Login.css'
import Logo from './Logo';

function Login({setUser,setUserName}) {

    const navigate = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    const [passwrodError, setPasswordError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [generalError,setGeneralError] = useState("");



    function handleSubmit(e){
        e.preventDefault();

        let data = localStorage.getItem("userList");

        if(data){
            data = JSON.parse(data);
            data.forEach((obj)=>{
                if(obj.email === emailRef.current.value){
                    if(obj.password === passwordRef.current.value){
                        setPasswordError("");
                        setEmailError("");
                        navigate("/");
                        setUser(true);
                        setUserName(obj.userName);
                    }else{
                        setPasswordError("Password is inCorrect!!");
                    }
                }else{
                    setEmailError("Email did not exist please sign up!!!");
                    setPasswordError("");
                    setTimeout(()=>{
                        navigate("/signup");
                        setEmailError("");
                        setPasswordError("");
                    },4000)
                }
            })
        }else{
            setGeneralError("User not exists please Sign up first!!!, will redirect in 4 seconds");
            setTimeout(()=>{
                navigate("/signup");
                setGeneralError("");
            },4000)
        }
    }
    const styleObj = {
        color:"red",
    }
    
    return (
        <>
        <div className="loginBody">
         <div className='loginOutline'>
             <div className='loginLogo'>{<Logo/>}</div>
             <form onSubmit={handleSubmit}>
                 {generalError && <p style={styleObj}>{generalError}</p>}
                 <label htmlFor='userEmail'>Email</label>
                 <input type="email" id="userEmail" required ref={emailRef}/>
                 { emailError && <p style={styleObj}>{emailError}</p>}
                 <label htmlFor='userEmail'>Password</label>
                 <input type="password" id="userPassword" required ref={passwordRef}/>
                 { passwrodError && <p style={styleObj}>{passwrodError}</p>}
                 <button type='submit'>Login</button>
             </form>
         </div>
        </div>
        </>
    );
}

export default Login;