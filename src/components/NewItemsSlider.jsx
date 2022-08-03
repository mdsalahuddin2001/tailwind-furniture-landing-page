import React from 'react';

// import swipper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import data
import { newInStore } from '../data';

const NewItemsSlider = () => {
  return (
    <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      className="mySwiper"
    >
      {newInStore.products.map((product, index) => {
        return (
          <SwiperSlide key={index} className="max-w-[265px]">
            <div className="relative">
              <img src={product.image.type} alt={product.name} />
              <div className="absolute text-white bottom-5 text-center w-full text-[18px] font-medium capitalize">
                {product.name}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default NewItemsSlider;
