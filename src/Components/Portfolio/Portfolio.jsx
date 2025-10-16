import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import sidebar from '../../assets/sidebar.png';
import ecommerce from '../../assets/ecommerce.png';
import hoc from '../../assets/hoc.png';
import musicapp from '../../assets/musicapp.png';
import 'swiper/css';
import { themeContext } from '../Context';
import { useContext } from 'react';

export const Portfolio = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='portfolio' id='Portfolio'>

            {/* heading */}
            <span style={{color: darkMode ? '#fff' : ''}}>Recent Projects</span>
            <span>Portfolio</span>
            {/* heading */}

            <Swiper
                spaceBetween={28}
                slidesPerView={3}
                grabCursor={true}
                className='portfolio-slider'
            >
                <SwiperSlide>
                    <img src={sidebar} alt='' />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={ecommerce} alt='' />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={hoc} alt='' />

                </SwiperSlide>
                <SwiperSlide>
                    <img src={musicapp} alt='' />

                </SwiperSlide>

            </Swiper>



        </div>
    )
}
