import { FC } from 'react';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from 'public/images/banner.png';
import banner2 from 'public/images/banner2.png';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
register();

// Css
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { ImageComponent } from '@/components/atoms/image';

export const Carrosel: FC = () => {
  return (
    <Swiper slidesPerView={1} pagination={{ clickable: true }} modules={[Pagination]} className="w-full h-full">
      <SwiperSlide>
        <ImageComponent image={banner1} alt="" stylization="" fill={true} />
      </SwiperSlide>
      <SwiperSlide>
        <ImageComponent image={banner2} alt="" stylization="" fill={true} />
      </SwiperSlide>
    </Swiper>
  );
};
