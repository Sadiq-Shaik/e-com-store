import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/thumbs";
// import "swiper/css/scrollbar";

function Carousel({ carouselItems }) {
  // slide JSX
  const slides = carouselItems.map((el, i) => {
    return (
      <SwiperSlide key={i}>
        {/* bg-gradient-to-l from-black to-color-grey-lightest */}
        <div className="w-full h-full flex">
          {/* <div className="w-full h-full bg-gradient-to-r from-white to-black">
            qwe
          </div> */}
          <Image
            src={el.img}
            alt={el.title}
            width={800}
            height={400}
            // w-full h-full
            className="object-cover w-full h-full"
          />
          <div className="absolute z-5 w-full h-full top-0 left-0 flex justify-center items-center gap-2 text-color-primary-lightest">
            <div className="flex flex-col gap-2 md:gap-6 p-4 md:p-6 lg:p-8 backdrop-brightness-[35%] rounded max-w-[75%]">
              <h2 className="text-2xl md:text-3xl lg:text-5xl">{el.title}</h2>
              <ul className="flex gap-4 lg:gap-6 text-sm md:text-xl">
                <li className="bg-color-primary-lightest text-color-primary-darkest active:bg-color-primary-darker active:text-color-grey-lightest px-2 md:px-3 lg:px-4 py-0.5 md:py-1 lg:py-2 rounded-sm">
                  <Link href={`/products/${el.productId}`}>Learn more</Link>
                </li>
                <li className="bg-color-primary-lightest text-color-primary-darkest active:bg-color-primary-darker active:text-color-grey-lightest px-2 md:px-3 lg:px-4 py-0.5  md:py-1 lg:py-2 rounded-sm">
                  <Link href={`/categories/${el.category}`}>View Category</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="w-full h-[40vh] lg:h-[92vh] mx-auto">
      {/* <style>
        {`
          .swiper-button-next,
          .swiper-button-prev {
            color: white;
            filter: drop-shadow(0 0 2px black);
            opacity: 1;
          }

          .swiper-button-next:after,
          .swiper-button-prev:after {
            font-size: 20px;
          }

          @media (min-width: 768px) {
            .swiper-button-next:after,
            .swiper-button-prev:after {
              font-size: 40px;
            }
          }

          .swiper-pagination-bullet-active {
            background-color: white;
            box-shadow: 0 0 5px black;
            opacity: 1;
          }
        `}
      </style> */}
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        // spaceBetween={50}
        slidesPerView={1}
        navigation
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={true}
        pagination={{ clickable: true }}
        className="h-full"
      >
        {/* <SwiperSlide>
          <div
            className={`flex w-full h-full justify-center items-center`}
          >
            <p className="my-paragraph">1</p>
            <p>1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full h-full justify-center items-center">
            <p>2</p>
            <p>2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full h-full justify-center items-center">
            <p>3</p>
            <p>3</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex w-full h-full justify-center items-center">
            <p>4</p>
            <p>4</p>
          </div>
        </SwiperSlide> */}
        {slides}
      </Swiper>
    </div>
  );
}

export default Carousel;
