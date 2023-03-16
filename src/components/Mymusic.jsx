import React from 'react';
import '../Styles/Mymusic.css'
import player1 from  '../Styles/assets/mymusic.png'
import { AiFillPlayCircle } from "react-icons/ai";

function Mymusic({collections,setSong}) {
   function handleChange(e){
    // console.log(e.target.parentElement.parentElement.parentElement.id);
    setSong(collections[e.target.parentElement.parentElement.parentElement.id]);
   }
   let defaultCover = "https://cdn.pixabay.com/photo/2021/03/04/20/30/microphone-6069470_960_720.jpg";
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
                        {/* <li><div><img src='' alt="cover"/></div><div>Song Name</div><div><AiFillPlayCircle/></div></li> */}
                        {
                          collections.map((obj,i)=>{
                            return(
                              <li key={i} id={i}><div className='coverImg'><img src={obj.songCover? obj.songCover : defaultCover} alt="cover"/></div><div>{obj.songName}</div><div onClick={handleChange}><AiFillPlayCircle/></div></li>
                            );
                          })
                        }
                    </ul>
                </div>
            </div>
          </div>
        </>
    );
}

export default Mymusic;