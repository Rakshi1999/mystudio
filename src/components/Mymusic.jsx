import React from 'react';
import '../Styles/Mymusic.css'
import player1 from  '../Styles/assets/mymusic.png'
import { AiFillPlayCircle } from "react-icons/ai";

function Mymusic(props) {
    return (
        <>
          <div className='outter-container'>
            <div className='leftSection'>
                <div className='playerContainer'>
                  <img src={player1} alt="player logo" className='image'/>
                </div>
            </div>
            <div className='rightSection'>
                <h3>My Musics</h3>
                <div className='musicContainer'>
                    <ul>
                        <li><div><img src='' alt="cover"/></div><div>Song Name</div><div><AiFillPlayCircle/></div></li>
                        <li><div><img src='' alt="cover"/></div><div>Song Name</div><div><AiFillPlayCircle/></div></li>
                        <li><div><img src='' alt="cover"/></div><div>Song Name</div><div><AiFillPlayCircle/></div></li>
                        <li><div><img src='' alt="cover"/></div><div>Song Name</div><div><AiFillPlayCircle/></div></li>
                        <li><div><img src='' alt="cover"/></div><div>Song Name</div><div><AiFillPlayCircle/></div></li>
                        <li><div><img src='' alt="cover"/></div><div>Song Name</div><div><AiFillPlayCircle/></div></li>
                        <li><div><img src='' alt="cover"/></div><div>Song Name</div><div><AiFillPlayCircle/></div></li>
                        <li><div><img src='' alt="cover"/></div><div>Song Name</div><div><AiFillPlayCircle/></div></li>
                        <li><div><img src='' alt="cover"/></div><div>Song Name</div><div><AiFillPlayCircle/></div></li>
                        <li><div><img src='' alt="cover"/></div><div>Song Name</div><div><AiFillPlayCircle/></div></li>
                    </ul>
                </div>
            </div>
          </div>
        </>
    );
}

export default Mymusic;