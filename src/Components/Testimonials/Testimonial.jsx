import React from 'react';
import './Testimonial.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { clients } from '../../assets/AllReviews';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination } from "swiper/modules";

export const Testimonial = () => {
  return (
    <div className='t-wrapper' id='Testimonial'>
      <div className="t-heading">
        <span>Client Always Get</span>
        <span>Exceptional Work</span>
        <span>from me...</span>

        <div className='blur t-blur1' style={{ background: 'var(--purple)' }}></div>
        <div className='blur t-blur2' style={{ background: 'skyblue' }}></div>
      </div>

      {/* swiper*/}

      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt='' />
                <span>{client.review}</span>

              </div>

            </SwiperSlide>
          )
        })}
      </Swiper>

    </div>
  )
}
