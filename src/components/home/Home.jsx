import React from 'react';
import './Home.css';
import dev from "../../assets/dev.png";

const Home = () => {


  return (
    <div className='home'>
      <div className='container'>
        <div className='text'>
          <h1>TEST TEST</h1>
          <h1>TEST TEST</h1>
        </div>
        <div className='image'>
          <img src={dev} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
