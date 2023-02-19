import Footer from "./footer";
import Header from "./header";

const StyleForSwiper = function () {
  return (
    <style>
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
    </style>
  );
};

function Layout({ children }) {
  return (
    <>
      <Header />
      <StyleForSwiper />
      <main className="">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
