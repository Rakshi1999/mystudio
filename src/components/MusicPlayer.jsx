import React ,{useState , useEffect, useRef} from 'react';
import '../Styles/Player.css';
import { AiFillPlayCircle , AiFillPauseCircle,AiOutlineForward,AiOutlineBackward, AiOutlineStepBackward, AiOutlineStepForward } from "react-icons/ai";


function MusicPlayer(props) {
    
    const{
        songSrc,
        songName,
        setSong,
        collections,
        songId,
        songCover,
    }=props;

    // console.log(songSrc);
    const [isPlaying , setIsPlaying] = useState(true);
    // const [currentSong,setCurrentSong] = useState(songSrc);
    const [timeUpdate,setTimeUpdate] = useState(1);
    const [songDuration, setSongDuration] = useState("0.00");
    const [currentDuration,setCurrentDuration] = useState(0.00);
    const progressRef = useRef(0);
    const audioEle = useRef();
    function playPause(){
        setIsPlaying(!isPlaying);
    }

    useEffect(()=>{
        if(isPlaying){
            audioEle.current.pause();
        }else{
            audioEle.current.play();
        }
    })

    // console.log("palyer")

    function updateTime(e){
        const duration = e.target.duration;
        const currentTime = e.target.currentTime;
        setSongDuration((duration/60).toFixed(2));
        let percentage = (currentTime/duration)*100;
        setTimeUpdate(percentage);
        setCurrentDuration(currentTime/60);
        if(currentTime === duration){
            setIsPlaying(true);
        }
    }

    function checkWidth(e){
        let width = progressRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;
        // console.log(offset);
        const divProgess = offset / width * 100;
        // console.log(divProgess);
        audioEle.current.currentTime = (divProgess/100)*audioEle.current.duration;
    }

    function handleNext(e){
        setSongDuration("0.00")
        if(songId === 9){
            setSong(collections[0]);
            if(!isPlaying){
                setIsPlaying(false); 
            }  
        }else{
            setSong(collections[songId+1]);
            if(!isPlaying){
                setIsPlaying(false); 
            }  

        }
    }
    
    function handlePrev(e){
        setSongDuration("0.00")
        if(songId === 0){
            setSong(collections[collections.length-1]); 
            if(!isPlaying){
                setIsPlaying(false); 
            }   
        }else{
            setSong(collections[songId-1]);
            if(!isPlaying){
                setIsPlaying(false); 
            }   
        }
    }

    let defaultCover = "https://cdn.pixabay.com/photo/2021/03/04/20/30/microphone-6069470_960_720.jpg";

    function handleRewind(){
        audioEle.current.currentTime -= 10; 
    }

    function handleForward(){
        audioEle.current.currentTime += 10;
    }

    return (
        <>
        <div className='player-container'>
            <div className={!isPlaying ? "coverplay" : "cover-pic"}>
             <div className='coverPic'>
               <img src={songCover ? songCover : defaultCover} alt="SongCover"/>
             </div>
             <span>{songName}</span>
            </div>
            <div className="player-outline">
                <div className='seekBar-outilne' onClick={checkWidth} ref={progressRef}>
                 <div className='seekbar' style={{width:`${timeUpdate}%`}}></div>
                </div>
                <div className='player-controls'>
                    <audio src={songSrc} ref={audioEle} onTimeUpdate={updateTime}/>
                 <AiOutlineStepBackward className='previous' onClick={handlePrev}/>
                 <AiOutlineBackward className='rewind' onClick={handleRewind}/>
                 { !isPlaying ? <AiFillPauseCircle className='playpause pause' onClick={playPause}/> :
                 <AiFillPlayCircle className='playpause play' onClick={playPause}/>}
                 <AiOutlineForward className='forward' onClick={handleForward}/>
                 <AiOutlineStepForward className='mynext' onClick={handleNext}/>
                </div>
            </div>
            <div className='duration-outline'>
                {currentDuration.toFixed(2)}/{songDuration}
            </div>
        </div>
        </>
    );
}

export default MusicPlayer;