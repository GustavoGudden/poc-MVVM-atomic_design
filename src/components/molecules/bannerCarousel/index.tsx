import { FC } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Banner } from '../banner';

// Images
import banner2 from '/public/images/banner2.png';

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
        <Banner />
      </SwiperSlide>
      <SwiperSlide className="h-full">
        <Image
          src={banner2}
          alt=""
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      </SwiperSlide>
    </Swiper>
  );
};
