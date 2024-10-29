import { Carousel } from "../../../components/ui/Carousel";
import { RedirectButton } from "../../../components/ui/RedirectButton";
import { UploadButton } from "../../../components/ui/UploadButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { countries, episodes, news } from "../../../constants";
import { Navigation } from "swiper/modules";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Academy() {
  const [next, setNext] = useState(true);
  const [prev, setPrev] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const videos = [
    {
      id: 1,
      thumbnail: "/images/journalist (2).jpg",
      videoUrl: "path_to_video1.mp4",
    },
    {
      id: 2,
      thumbnail: "/images/journalist (1).jpg",
      videoUrl: "path_to_video2.mp4",
    },
    {
      id: 3,
      thumbnail: "/images/slide (1).jpg",
      videoUrl: "path_to_video3.mp4",
    },
    {
      id: 4,
      thumbnail: "/images/slide (2).jpg",
      videoUrl: "path_to_video3.mp4",
    },
    {
      id: 5,
      thumbnail: "/images/slide (3).jpg",
      videoUrl: "path_to_video3.mp4",
    },
    {
      id: 6,
      thumbnail: "/images/slide (4).jpg",
      videoUrl: "path_to_video4.mp4",
    },
    {
      id: 7,
      thumbnail: "/images/slide (5).jpg",
      videoUrl: "path_to_video5.mp4",
    },
  ];

  return (
    <div className="space-y-14">
      <Carousel options={news} />
      <div className="flex justify-between items-center">
        <RedirectButton />
        <UploadButton onClick={() => {}} />
      </div>
      <div className="flex flex-row items-start gap-[60px] h-full">
        <div className="w-[345px]">
          <div className="w-full relative pb-4 z-[1000]">
            <button
              type="button"
              className="flex items-center justify-between w-full relative"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="text-[#fff] text-lg">Filter by country</span>
              <FaChevronDown size={15} color="#fff" />
            </button>
            <ul
              data-menu={isOpen}
              className="absolute w-full top-full left-0 bg-[#fff] rounded-md p-4 shadow-xl flex flex-col [&[data-menu=true]]:flex [&[data-menu=false]]:hidden max-h-[400px] overflow-y-auto"
            >
              <li className="pb-6">
                <input
                  type="text"
                  placeholder="search"
                  autoFocus
                  className="bg-secondary py-3 pl-5 pr-3 transition-all w-full rounded-full outline-secondary"
                />
              </li>

              {countries.map((item, index) => (
                <li
                  key={index}
                  className="text-lg hover:bg-secondary p-3 rounded-md cursor-pointer transition-all flex items-center justify-start gap-2"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-10 h-auto rounded-sm overflow-hidden">
                    <img
                      src={item.flag}
                      alt={item.name + index}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-[#000]">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-3 max-h-[610px] overflow-y-auto border-r border-primary pr-6 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-secondary [&::-webkit-scrollbar-thumb:hover]:bg-[#fff]">
            {episodes.map((item, index) => (
              <SwiperSlide
                key={index}
                className="relative max-h-[142px] rounded-2xl overflow-hidden group"
              >
                <div className="absolute top-4 left-4 z-50">
                  <span className="uppercase text-2xl text-[#fff] tracking-wider font-semibold">
                    {item.message.split(" ")[0]}
                  </span>
                  <p className="capitalize text-[#fff]">
                    {item.message.split(" ")[1]} {index + 1}
                  </p>
                </div>
                <div className="absolute z-10 bg-[#000000CC] w-full h-full group-hover:bg-[#00000044] transition-all cursor-pointer" />

                <div className="h-8 w-8 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50">
                  <img
                    src="/icons/play.svg"
                    alt="Play"
                    className="h-full w-full object-cover group-hover:scale-105 transition-all z-10"
                  />
                </div>
                <img
                  src={item.imgUrl}
                  alt={item.message + index}
                  className="h-full w-full object-cover group-hover:scale-105 transition-all"
                />
              </SwiperSlide>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full overflow-hidden space-y-6 pb-20">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".next-button",
              prevEl: ".prev-button",
            }}
            slidesPerView={1}
            onSlideChangeTransitionEnd={(e) => {
              setPrev(e.isEnd);
              setNext(e.isBeginning);
            }}
          >
            {videos.map((video) => (
              <SwiperSlide
                key={video.id}
                className="relative max-h-[500px] rounded-2xl overflow-hidden"
              >
                <div className="w-[40px] h-[24px] absolute z-20 top-10 left-10">
                  <img
                    src="/images/fh.png"
                    alt="Logo fh"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="w-[50px] lg:w-[100px] xl:w-[180px] h-[50px] lg:h-[100px] xl:h-[180px] absolute z-20 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] cursor-pointer">
                  <img
                    src="/icons/play.svg"
                    alt="play"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="absolute z-10 bg-[#0000004D] w-full h-full" />
                <img
                  src={video.thumbnail}
                  alt="Play"
                  className="h-full w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-between items-center h-auto">
            <button
              type="button"
              className="prev-button bg-primary hover:bg-main transition-all text-[#fff] py-3 px-8 uppercase rounded-full font-fraunces disabled:bg-opacity-10 disabled:cursor-not-allowed"
              disabled={next}
            >
              Previous
            </button>
            <button
              type="button"
              className="next-button bg-primary hover:bg-main transition-all text-[#fff] py-3 px-8 uppercase rounded-full font-fraunces disabled:bg-opacity-10 disabled:cursor-not-allowed"
              disabled={prev}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
