import { Swiper, SwiperSlide } from "swiper/react";
import React from 'react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import img1 from '../Images/img1.jpg';
import img2 from '../Images/img2.jpg';

// import required modules
import { Pagination, Navigation } from "swiper";

const style = 
{
    width:"80%",
    height:"70%",
    marginLeft:"10%"
}

const Offers = () =>{
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img1} alt="1" style={style}/></SwiperSlide>
        <SwiperSlide><img src={img2} alt="1" style={style}/></SwiperSlide>
      </Swiper>
    </>
  );
}
export default Offers