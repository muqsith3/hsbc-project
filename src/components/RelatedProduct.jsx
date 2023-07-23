import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function RelatedProduct() {
  const data = [
    {
      id: 1,
      img: "https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002",
      title: "Al-Durrar-Single Farmer Micro Iot Box-4oz",
      price: "$48.00",
    },
    {
      id: 2,
      img: "https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002",
      title: "Al-Durrar-Single Farmer Micro Iot Box-4oz",
      price: "$48.00",
    },
    {
      id: 3,
      img: "https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002",
      title: "Al-Durrar-Single Farmer Micro Iot Box-4oz",
      price: "$48.00",
    },
    {
      id: 4,
      img: "https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002",
      title: "Al-Durrar-Single Farmer Micro Iot Box-4oz",
      price: "$48.00",
    },
    {
      id: 5,
      img: "https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002",
      title: "Al-Durrar-Single Farmer Micro Iot Box-4oz",
      price: "$48.00",
    },
    {
      id: 6,
      img: "https://cdn.shopify.com/s/files/1/1786/7381/products/FOR_SHOPIFY_DURRAR_02_600x.png?v=1668140002",
      title: "Al-Durrar-Single Farmer Micro Iot Box-4oz",
      price: "$48.00",
    },
  ];
  return (
    <>
      <div className="pb-10">
        <h1 className="text-center font-normal tracking-widest text-2xl pt-20 pb-5">
          RELATED PRODUCTS
        </h1>
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          navigation>
          {data.map((image) => (
            <SwiperSlide key={image.id} loop={true}>
              <div className="container ">
                <div className="grid">
                  <img src={image.img} alt="/" />
                </div>
                <div className="text-center font-semibold text-sm px-6">
                  <h5 className="font-bold">{image.title}</h5>
                  <p>{image.price}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
