import React from 'react';

const Hero = () => {
  return (
    <>
        <div className='hero'>
            <img 
                src='./photo-grid.png' 
                alt='hero' 
            />
        </div>
        <div className='heroInfo'>
            <h1>Online experiences</h1>
            <p>Join unique interactive activities led
                by one-of-a-kind host--all without
                leaving home.
            </p>
        </div>
    </>
  )
}

export default Hero;