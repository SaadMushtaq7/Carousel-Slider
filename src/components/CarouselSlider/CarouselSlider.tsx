import React from "react";
import { Navigation, Pagination, EffectCoverflow } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CarouselSlider = () => {
  const data = [
    "https://swiperjs.com/demos/images/nature-1.jpg",
    "https://swiperjs.com/demos/images/nature-2.jpg",
    "https://swiperjs.com/demos/images/nature-3.jpg",
    "https://swiperjs.com/demos/images/nature-4.jpg",
    "https://swiperjs.com/demos/images/nature-5.jpg",
    "https://swiperjs.com/demos/images/nature-6.jpg",
    "https://swiperjs.com/demos/images/nature-7.jpg",
    "https://swiperjs.com/demos/images/nature-8.jpg",
    "https://swiperjs.com/demos/images/nature-10.jpg",
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, EffectCoverflow]}
      effect="coverflow"
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 200,
        modifier: 4,
        slideShadows: true,
      }}
      navigation
      pagination={{ clickable: true }}
      grabCursor
      slidesPerView={2}
      centeredSlides
      style={{ height: "400px", width: "100vw", margin: "0 20px" }}
      loop
      slideToClickedSlide
    >
      {data.map((slideImage, index) => (
        <SwiperSlide
          key={slideImage}
          style={{
            backgroundImage: `url(${slideImage})`,
            objectFit: "fill",
            color: "transparent",
            borderRadius: "10px",
          }}
        >
          slide{index + 1}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselSlider;
