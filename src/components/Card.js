import React from 'react';

const Card = () => {
  return (
    <div className='card'>
        <img 
            src='./katie-zaferes.png' 
            alt='pic' 
        />
        <div className='cardInfo'>
            <img 
                src='./star.png' 
                alt='pic' 
            />
            <span className='rating'>5.0</span>
            <span className='desc'>(6) .</span>
            <span className='price'>UK</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p>From $136 / person</p>
    </div>
  )
}

export default Card;