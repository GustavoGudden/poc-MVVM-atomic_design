import { FC } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Banner } from '../banner';

// Images
import banner from '/public/images/banner1.png';

register();

// SWIPER DEPENCES
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

export const BannerCarrosel: FC = () => {
  return (
    <Swiper slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]} className="xL:w-full xl:h-full xl:mt-0 mt-4 w-full h-full ">
      <SwiperSlide className="w-full h-full bg-black   ">
        <Banner image={banner} />
      </SwiperSlide>
    </Swiper>
  );
};
