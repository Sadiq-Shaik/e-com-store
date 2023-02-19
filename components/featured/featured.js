import Link from "next/link";
import Image from "next/image";

// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "../UI/productCard";

function Featured() {
  const featuredProducts = [
    {
      productId: "123asc",
      name: "INTEL CPU",
      price: 37000,
      category: "cpu",
      inStock: true,
      imgs: [
        "https://m.media-amazon.com/images/I/51EtUSUQeJS.jpg",
        "https://images.unsplash.com/photo-1555616635-640b71bdb185?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1555617778-02518510b9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
    },
    {
      productId: "123fsc",
      name: "AMD CPU",
      price: 21000,
      category: "cpu",
      inStock: true,

      imgs: [
        "https://m.media-amazon.com/images/I/81b75EQJrgL._SY450_.jpg",
        "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
        "https://images.unsplash.com/photo-1551640179-9e39f8055291?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1222&q=80",
      ],
    },
    {
      productId: "134asc",
      name: "Apple Mac Mini",
      price: 70000,
      category: "mac",
      inStock: true,

      imgs: [
        "https://allcell.am/wp-content/uploads/2022/05/Mac-Mini-M1-1.jpg",
        "https://s.yimg.com/uu/api/res/1.2/X8t6PJiuJWFJtS7h_xWeTQ--~B/aD0xMjI1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2023-01/0c5842b0-9e70-11ed-bbdc-46e55792b8fa.cf.jpg",
        "https://images.unsplash.com/photo-1636298813354-00d8200924a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      ],
    },
  ];

  // const featuredJSX = featuredProducts.map((el, i) => (
  //   <li
  //     key={i}
  //     className="rounded-sm lg:rounded overflow-hidden bg-color-primary-darker text-color-grey-lightest basis-[47.5%] lg:basis-[30%] shadow-md shadow-color-primary-darkest"
  //   >
  //     <Swiper
  //       modules={[Pagination]}
  //       // spaceBetween={50}
  //       slidesPerView={1}
  //       loop={true}
  //       // autoplay={{
  //       //   delay: 3000,
  //       //   disableOnInteraction: false,
  //       // }}
  //       centeredSlides={true}
  //       pagination={{ clickable: true }}
  //     >
  //       {el.imgs.map((img, j) => (
  //         <SwiperSlide key={j}>
  //           <div>
  //             <Image
  //               className="w-full mx-auto h-[12rem] md:h-[20rem] lg:h-[26rem] object-cover"
  //               src={img}
  //               alt={j}
  //               width={400}
  //               height={200}
  //               // w-full h-full
  //             />
  //           </div>
  //         </SwiperSlide>
  //       ))}
  //     </Swiper>
  //     <div className="px-3 py-4 md:p-6 lg:p-8 gap-y-3 md:gap-y-8 flex justify-between items-start flex-wrap">
  //       <div className="flex flex-col gap-0.5 md:gap-1 basis-[100%] lg:basis-[60%]">
  //         <Link href={`/products/${el.productId}`} target="_blank">
  //           <h4 className="md:font-semibold text-sm md:text-lg lg:text-xl">
  //             {el.name}
  //           </h4>
  //         </Link>
  //         <Link href={`/categories/${el.category}`}>
  //           <p className="opacity-70 bg-color-primary-darkest text-xs md:text-sm px-1 py-0.5 lg:px-2 lg:py-1 md:rounded rounded-sm w-fit">
  //             {el.category}
  //           </p>
  //         </Link>
  //       </div>
  //       <p className="text-xs md:text-xl md:font-semibold basis-[40%] lg:text-end">
  //         {el.price.toLocaleString("en-IN", {
  //           style: "currency",
  //           currency: "INR",
  //         })}
  //       </p>
  //       <div className="w-full flex items-center">
  //         <Link
  //           href={`/products/${el.productId}`}
  //           className="bg-color-primary-lightest text-xs md:text-base px-1.5 py-[0.2rem] md:px-4 md:py-2 rounded text-color-primary-darkest font-semibold hover:bg-color-primary-darkest hover:text-color-primary-lightest transition-all"
  //         >
  //           Buy Now
  //         </Link>
  //       </div>
  //     </div>
  //   </li>
  // ));

  const featuredJSX = featuredProducts.map((el, i) => {
    return <ProductCard el={el} i={i} key={i} />;
  });

  return (
    <section className=" py-12 lg:py-24 w-[92%] lg:w-4/5 mx-auto">
      <h2 className="text-xl md:text-3xl font-semibold mb-4 lg:mb-8 text-center">
        Featured Products
      </h2>
      <ul className="flex flex-wrap justify-between gap-y-12 lg:gap-y-20">
        {featuredJSX}
      </ul>
    </section>
  );
}

export default Featured;
