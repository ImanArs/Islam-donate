import React from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import styles from "./MainComponents.module.scss";

// import required modules
import { Pagination } from "swiper";

const SliderSwiper = () => {
  return (
    <div>
      <Swiper pagination={true} modules={[Pagination]} className={styles.mySwiper}>
        <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Aminyevskaya_-_station_hall_side_%281%29.jpg/1200px-Aminyevskaya_-_station_hall_side_%281%29.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Aminyevskaya_-_station_hall_side_%281%29.jpg/1200px-Aminyevskaya_-_station_hall_side_%281%29.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Aminyevskaya_-_station_hall_side_%281%29.jpg/1200px-Aminyevskaya_-_station_hall_side_%281%29.jpg" alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderSwiper