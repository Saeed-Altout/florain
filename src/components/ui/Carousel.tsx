import "swiper/css";

import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface CarouselProps {
  options: {
    id: number;
    title: string;
    tumble: string;
  }[];
}

export const Carousel = ({ options }: CarouselProps) => {
  return (
    <Swiper
      direction={"horizontal"}
      breakpoints={{
        0: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
      }}
      spaceBetween={30}
      mousewheel={true}
      pagination={{
        clickable: true,
      }}
      modules={[Mousewheel]}
      className="mySwiper"
    >
      {options.map((item, index) => (
        <SwiperSlide
          key={index}
          className="relative h-full max-h-[160px] overflow-hidden rounded-xl"
        >
          <p className="text-[#fff] font-medium absolute bottom-6 left-8 z-10 capitalize">
            {item.title}
          </p>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-[#161B2ECC] to-[#00000008] " />
          <img
            src={item.tumble}
            alt={item.title + index}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
