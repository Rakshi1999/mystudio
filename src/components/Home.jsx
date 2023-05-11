import React,{useRef} from 'react';
import '../Styles/Home.css'

import pic1 from '../Styles/assets/carsorel/1.jpeg'
import pic2 from '../Styles/assets/carsorel/2.jpeg'
import pic3 from '../Styles/assets/carsorel/3.jpeg'
import pic4 from '../Styles/assets/carsorel/4.jpeg'
import pic5 from '../Styles/assets/carsorel/5.jpeg'
import pic6 from '../Styles/assets/carsorel/6.jpeg'

import trending3 from '../Styles/assets/Trending pic/3.jpeg'
import trending1 from '../Styles/assets/Trending pic/1.jpeg'
import trending2 from '../Styles/assets/Trending pic/2.jpeg'
import trending4 from '../Styles/assets/Trending pic/4.jpeg'
import trending5 from '../Styles/assets/Trending pic/5.jpeg'
import trending6 from '../Styles/assets/Trending pic/6.jpeg'
import trending7 from '../Styles/assets/Trending pic/7.jpeg'
import trending8 from '../Styles/assets/Trending pic/8.jpeg'

import artist1 from '../Styles/assets/Artist/1.jpeg'
import artist2 from '../Styles/assets/Artist/4.jpeg'
import artist3 from '../Styles/assets/Artist/5.jpeg'
import artist4 from '../Styles/assets/Artist/3.jpeg'
import artist5 from '../Styles/assets/Artist/2.jpeg'
import artist6 from '../Styles/assets/Artist/6.jpeg'
import artist7 from '../Styles/assets/Artist/7.jpeg'
import artist8 from '../Styles/assets/Artist/8.jpeg'

import { NavLink, useNavigate } from "react-router-dom";

import { AiOutlineCaretLeft, AiOutlineCaretRight } from "react-icons/ai";

const Home = () => {
  const navigate = useNavigate();
  const imgRef = useRef();
  const carouselRef = useRef();

  const trendingCarouselRef = useRef();
  const trendingImageRef = React.createRef();

  const artistCarouselRef = useRef();
  const artistImageRef = React.createRef();

  function scrollHandlerLeft() {
    carouselRef.current.scrollLeft -= imgRef.current.clientWidth;
  }

  function scrollHandlerRight() {
    carouselRef.current.scrollLeft += imgRef.current.clientWidth;
  }

  function TrendingScrollHandlerLeft() {
    // console.log(trendingCarouselRef.current.scrollLeft+" "+"leftbtn");
    trendingCarouselRef.current.scrollLeft -=
      trendingImageRef.current.clientWidth;
  }

  function TrendingScrollHandlerRight() {
    // console.log(trendingCarouselRef.current.scrollLeft+" "+"rightbtn");
    trendingCarouselRef.current.scrollLeft +=
      trendingImageRef.current.clientWidth;
  }

  function artistScrollHandlerLeft() {
    artistCarouselRef.current.scrollLeft -= artistImageRef.current.clientWidth;
  }

  function artistScrollHandlerRight() {
    artistCarouselRef.current.scrollLeft += artistImageRef.current.clientWidth;
  }

  const TrendingCard = React.forwardRef((props, ref) => {
    return (
      <>
        <div className="cardHolder">
          <img src={props.src} ref={ref} alt={props.name} />
          <div>{props.name}</div>
        </div>
      </>
    );
  });

  function handleClick(e) {
    let token = localStorage.getItem("token");
    if (!token) {
      alert("Please sign up for complete access");
      navigate("https://musicstudio.onrender.com/mymusic");
      // } else {
      //   alert(
      //     "Thank you for the sign up, please stay tunned we will roll an update soon!!!"
      //   );
    }
  }

  return (
    <>
      <div className="outline">
        <div className="left-Section"></div>
        <div className="right-Section">
          <div className="homeNav">
            <ul>
              <li>
                <NavLink to="/mymusic">All</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">Trending Songs</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">New Songs</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">Old Songs</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">Moods & Genres</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">Album</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">Radio</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">Podcast</NavLink>
              </li>
              <li>
                <NavLink to="/mymusic">My Music</NavLink>
              </li>
            </ul>
          </div>
          <div className="wrapper" onClick={scrollHandlerLeft}>
            <span className="left">
              <AiOutlineCaretLeft />
            </span>
            <div className="carousel" ref={carouselRef}>
              <img src={pic1} ref={imgRef} alt="image1" />
              <img src={pic2} alt="image2" />
              <img src={pic3} alt="image3" />
              <img src={pic4} alt="image4" />
              <img src={pic5} alt="image5" />
              <img src={pic6} alt="image6" />
            </div>
            <span className="right" onClick={scrollHandlerRight}>
              <AiOutlineCaretRight />
            </span>
          </div>
          <div className="trendingPage" onClick={handleClick}>
            <h3 className="Titile">Trending Songs</h3>
            <div className="trendingWrapper">
              <span className="left" onClick={TrendingScrollHandlerLeft}>
                <AiOutlineCaretLeft />
              </span>
              <div className="trendingCardsHolder" ref={trendingCarouselRef}>
                <TrendingCard
                  src={trending3}
                  name="Jelebi"
                  ref={trendingImageRef}
                />
                <TrendingCard src={trending1} name="Dil ne" />
                <TrendingCard src={trending4} name="oh sanam" />
                <TrendingCard src={trending5} name="galat" />
                <TrendingCard src={trending6} name="kiss me" />
                <TrendingCard src={trending7} name="Sugar Crash" />
                <TrendingCard src={trending8} name="Peaches" />
                <TrendingCard src={trending2} name="Dil di gal" />
              </div>
              <span className="right" onClick={TrendingScrollHandlerRight}>
                <AiOutlineCaretRight />
              </span>
            </div>
          </div>
          <div className="artists" onClick={handleClick}>
            <h3 className="Titile">Artists</h3>
            <div className="trendingWrapper">
              <span className="left" onClick={artistScrollHandlerLeft}>
                <AiOutlineCaretLeft />
              </span>
              <div
                className="trendingCardsHolder artistCards"
                ref={artistCarouselRef}
              >
                <TrendingCard
                  src={artist1}
                  name="Neha Kakkar"
                  ref={artistImageRef}
                />
                <TrendingCard src={artist2} name="Arijit singh" />
                <TrendingCard src={artist3} name="Badshah" />
                <TrendingCard src={artist4} name="payal" />
                <TrendingCard src={artist5} name="Alka yagnik" />
                <TrendingCard src={artist6} name="tanisk bagachi" />
                <TrendingCard src={artist7} name="pritam" />
                <TrendingCard src={artist8} name="B Praak" />
              </div>
              <span className="right" onClick={artistScrollHandlerRight}>
                <AiOutlineCaretRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;