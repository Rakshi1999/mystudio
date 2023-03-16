import React from 'react';
import '../Styles/Signup.css'
import Logo from './Logo';

import {useNavigate} from 'react-router-dom';

function Signup(props) {

    const navigate = useNavigate();

    function handleSubmit(e){
        e.preventDefault();
        navigate('/login');

    }
    return (
        <>
        <div className='signupFormContainer'>
            <div className='formContainer'>
                <div className='signupLogo'>{<Logo/>}</div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="userName">User Name</label>
                    <input id='userName'/>
                    <label htmlFor="userName">Email</label>
                    <input id='userName'/>
                    <label htmlFor="userName">Password</label>
                    <input id='userName'/>
                    <label htmlFor="userName">Confirm Password</label>
                    <input id='userName'/>
                    <button type='submit'>SignUp</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Signup;