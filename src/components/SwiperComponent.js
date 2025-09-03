import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from "next/image";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import '../styles/styles.css';

// import required modules
import { Navigation } from 'swiper/modules';

export default function App() {
  const images = [
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Headphones._SY232_CB549022351_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Headphones._SY232_CB549022351_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Headphones._SY232_CB549022351_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Headphones._SY232_CB549022351_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Headphones._SY232_CB549022351_.jpg",
    "https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2025/Q1DefectReduction/Fuji_Defect_Reduction_2x_Headphones._SY232_CB549022351_.jpg",
  ];

  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        className="mySwiper">
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image
              src={src}
              alt="Description of image"
              width={500}
              height={300}
            />

          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
