import React from 'react';

const Card = ({img, rating, reviewCount, location, title, price, openSpots}) => {
  return (
    <div className='card'>
        {openSpots === 0 && <div className='cardBadge'>SOLD OUT</div>}
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
        <p className='cardTitle'>{title}</p>
        <p className='cardPrice'><span className='bold'>From ${price}</span> / person</p>
    </div>
  )
}

export default Card;