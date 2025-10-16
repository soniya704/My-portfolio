import React from 'react';
import './Footer.css';
import wave from '../../assets/wave.png';
//import insta from '@iconscout/react-unicons/icons/uil--instagram'
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Github from '@iconscout/react-unicons/icons/uil-github';
import Facebook from '@iconscout/react-unicons/icons/uil-Facebook';


export const Footer = () => {
  return (
    <div className='footer'>
        <img src={wave} alt='' style={{width: '100%'}}/>
        <div className="footer-content">
            <span>soni@gmail.com</span>
            <div className="footer-icons">
                <Insta color='white' size='3rem'/>
                <Github color='white' size='3rem'/>
                <Facebook color='white' size='3rem'/>
              
            </div>
        </div>
    </div>
  )
}
