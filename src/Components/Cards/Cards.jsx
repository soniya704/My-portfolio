import React from 'react';
import './Cards.css'

export const Cards = ({emoji, heading, detail}) => {
  return (
    <div className='card'>
        <img src={emoji} alt=''/>
        <span>{heading}</span>
        <span>{detail}</span>
        <button className='btn'>Learm more</button>

    </div>
  )
}
