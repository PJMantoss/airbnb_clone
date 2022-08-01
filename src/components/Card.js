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
            <span className='gray'>(6) .</span>
            <span className='gray'>UK</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><span className='bold'>From $136</span> / person</p>
    </div>
  )
}

export default Card;