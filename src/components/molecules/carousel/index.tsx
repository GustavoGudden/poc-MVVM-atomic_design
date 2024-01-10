import { FC } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
register();

// Css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export const Carrosel: FC = () => {
  return (
    <Swiper slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]} className="w-full h-full">
      <SwiperSlide>
        <Image src="/images/banner.png" alt="" fill={true} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src="/images/banner2.png" alt="" fill={true} />
      </SwiperSlide>
    </Swiper>
  );
};
