import React from 'react';

const Card = ({img, rating, reviewCount, location, title, price}) => {
  return (
    <div className='card'>
        <img 
            src={img} 
            alt='pic' 
        />
        <div className='cardInfo'>
            <img 
                src='./star.png' 
                alt='pic' 
            />
            <span className='rating'>{rating}</span>
            <span className='gray'>({reviewCount}) .</span>
            <span className='gray'>{location}</span>
        </div>
        <p>{title}</p>
        <p><span className='bold'>From ${price}</span> / person</p>
    </div>
  )
}

export default Card;