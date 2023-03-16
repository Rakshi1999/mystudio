import React from 'react';

function Logo(props) {
    return(
        <div className='logo'>
            <div className='logo-bars'>
                <span className='bar first'>s</span>
                <span className='bar'></span>
                <span className='bar middle'></span>
                <span className='bar'></span>
                <span className='bar last'>s</span>
            </div>
            <div className='logo-title'>Music Studio</div>
        </div>
    )
}

export default Logo;