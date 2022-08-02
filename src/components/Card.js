import React from 'react';

const Card = ({data}) => {
  let badgeText;
  if(data.openSpots === 0){
    badgeText = 'SOLD OUT'
  }else if(data.location === 'Online'){
    badgeText = 'ONLINE'
  }


  return (
    <div className='card'>
        {badgeText &&
          <div className='cardBadge'>
            {badgeText}
          </div>
        }
        <img 
            src={data.coverImg} 
            alt='pic' 
        />
        <div className='cardInfo'>
            <img 
                src='./star.png' 
                alt='pic' 
            />
            <span className='rating'>{data.stats.rating}</span>
            <span className='gray'>({data.statsreviewCount}) .</span>
            <span className='gray'>{data.location}</span>
        </div>
        <p className='cardTitle'>{data.title}</p>
        <p className='cardPrice'><span className='bold'>From ${data.price}</span> / person</p>
    </div>
  )
}

export default Card;