'use client';

import Image from 'next/image';
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface CarouselProps {
  images: string[];
  alt: string;
}

const Carousel: React.FC<CarouselProps> = ({ images, alt }) => {
  if (images.length === 1) {
    return (
      <div className="project-carousel project-carousel--single">
        <Image src={images[0]} alt={alt} width={600} height={400} />
      </div>
    );
  }

  return (
    <div className="project-carousel">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        slidesPerView={1}
      >
        {images.map((src, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: image order is stable and non-reorderable
          <SwiperSlide key={`${src}-${i}`}>
            <Image src={src} alt={`${alt} — screenshot ${i + 1}`} width={200} height={150} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Carousel;
