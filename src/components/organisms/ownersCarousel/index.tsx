import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// CSS SLIDERS
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { owners } from '@/mocks/data/responseData.mock';
import { OwnerCard } from '../ownerCard';

export const OwnesCarousel: FC = () => {
  const { data } = owners;

  return (
    <div className="mt-16 ">
      <Swiper slidesPerView={3} pagination={{ clickable: true }} modules={[Pagination]} spaceBetween={300}>
        {data.map((owner, index) => (
          <SwiperSlide key={index}>
            <OwnerCard owner={owner} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
