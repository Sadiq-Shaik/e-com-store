import { useRef, useState } from "react";
import Head from "next/head";

import Carousel from "../components/carousel/carousel";
import Featured from "../components/featured/featured";

function IndexPage() {
  const carouselFeauredItems = [
    {
      title: "A Powerful cpu to write production level code",
      category: "cpu",
      productId: "abcxyz1",
      img: "https://www.techspot.com/articles-info/2352/images/intel-12700kf-7.jpg",
    },
    {
      title: "High Badthwidth and speed gpu for your graphic needs.",
      category: "gpu",
      productId: "abcxyz2",
      img: "https://images.unsplash.com/photo-1624701928517-44c8ac49d93c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      title: "Thin and Light from Dell.",
      category: "laptop",
      productId: "abcxyz3",
      img: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    },
    {
      title: "This 30W M2 SOC destroys all desktop cpus.",
      category: "mac",
      productId: "abcxyz4",
      img: "https://images.wallpapersden.com/image/download/mac-mini-apple-m1-chip_bGltamWUmZqaraWkpJRmbmdlrWZlbWU.jpg",
    },
  ];

  return (
    <div className="">
      <Head>
        <title>Welcome to ASW Online Store</title>
      </Head>
      <Carousel carouselItems={carouselFeauredItems} />
      <Featured />
    </div>
  );
}

export default IndexPage;
