import React from 'react';
import './Home.css';
import dev from "../../assets/dev.png";

const Home = () => {


  return (
    <div className='home'>
      <div className='container'>
        <div className='text'>
          <p>Make your placements journey smooth. Discover top companies and conquer your coding challenges with curated DSA resources</p>
          <br />
          <h1>AB SB PLACE HONGE!</h1>
        </div>
        <div className='image'>
          <img src={dev} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
