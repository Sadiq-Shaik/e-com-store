import Link from "next/link";
import Image from "next/image";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function ProductCard({ el, i }) {
  return (
    <li
      key={i}
      className="rounded-sm lg:rounded overflow-hidden bg-color-primary-darker text-color-grey-lightest basis-[47.5%] lg:basis-[30%] shadow-md shadow-color-primary-darkest"
    >
      <Swiper
        modules={[Pagination]}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
      >
        {el.imgs.map((img, j) => (
          <SwiperSlide key={j}>
            <div>
              <Image
                className="w-full mx-auto h-[12rem] md:h-[20rem] lg:h-[26rem] object-cover"
                src={img}
                alt={j}
                width={400}
                height={200}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="px-3 py-4 md:p-6 lg:p-8 gap-y-3 md:gap-y-8 flex justify-between items-start flex-wrap">
        <div className="flex flex-col gap-0.5 md:gap-1 basis-[100%] lg:basis-[60%]">
          <Link href={`/products/${el.productId}`} target="_blank">
            <h4 className="md:font-semibold text-sm md:text-lg lg:text-xl">
              {el.name}
            </h4>
          </Link>
          <Link href={`/categories/${el.category}`}>
            <p className="opacity-70 bg-color-primary-darkest text-xs md:text-sm px-1 py-0.5 lg:px-2 lg:py-1 md:rounded rounded-sm w-fit">
              {el.category}
            </p>
          </Link>
        </div>
        <p className="text-xs md:text-xl md:font-semibold basis-[40%] lg:text-end">
          {el.price.toLocaleString("en-IN", {
            style: "currency",
            currency: "INR",
          })}
        </p>
        <div className="w-full flex items-center">
          <Link
            href={`/products/${el.productId}`}
            className="bg-color-primary-lightest text-xs md:text-base px-1.5 py-[0.2rem] md:px-4 md:py-2 rounded text-color-primary-darkest font-semibold hover:bg-color-primary-darkest hover:text-color-primary-lightest transition-all"
          >
            Buy Now
          </Link>
        </div>
      </div>
    </li>
  );
}

export default ProductCard;
