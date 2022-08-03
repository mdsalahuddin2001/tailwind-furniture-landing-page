// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../slider.css';
// import require module
import { Navigation, Pagination } from 'swiper';
// import data
import { products } from '../data';
// import icons
import { HiPlus } from 'react-icons/hi';

const ProductsSlider = () => {
  const { pages } = products;
  return (
    <Swiper
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="productSlider min-h-[1300px]"
    >
      {pages.map((page, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 gap-x-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
              {page.productList.map((product, index) => {
                const { image, name, price, oldPrice } = product;
                return (
                  <div
                    key={index}
                    className="w-full max-w-[290px] h-[380px] text-left"
                  >
                    <div className="border hover:border:accent rounded-2xl w-full max-w-[285px] h-full max-h-[292px] flex items-center justify-center mb-4 relative transition">
                      <img src={image.type} alt={name} />
                      <div className="absolute bottom-4 right-5 bg-gray-200 w-8 h-8 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-300 transition">
                        <HiPlus className="text-xl text-primary" />
                      </div>
                    </div>
                    <div className="font-semibold lg:text-xl">{name}</div>
                    <div className="flex items-center gap-x-3">$ {price}</div>
                    <div className="text-[15px] text-grey line-through">
                      $ {oldPrice}
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductsSlider;
