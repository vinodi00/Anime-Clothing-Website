import React from 'react';
import heroImage from '../assets/slide1.png'; // replace with your image name

function Home() {
  return (
    <>


      <div className="home-hero">
        <img src={heroImage} alt="Hero" className="hero-image" />
      </div>
    </>
  );
}

export default Home;
