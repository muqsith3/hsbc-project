import React from "react";

export default function Discount() {
  return (
    <>
      <section className="container max-w-full">
        <div className="text-center relative">
          <div className="p-0 relative text-[#332219]">
            <div className="py-10">
              <h1 className="text-2xl font-bold uppercase">our coffess</h1>
              <p className="font-semibold text-xl">
                We Invite you to experience Port of Mokha coffee
              </p>
            </div>
            <img
              src="https://images.wallpaperscraft.com/image/single/cup_coffee_cookies_192851_1920x1080.jpg"
              alt="Discount"
              className="w-full h-[150px] object-cover bg-center filter brightness-50 contrast-80"
            />
            <div className="absolute top-[23%] left-0 w-full h-full flex flex-col justify-center items-center text-white text-center">
              <h1 className="text-md uppercase">feel the taste</h1>
              <h3 className="font-bold text-lg">More than coffe & Tea</h3>
              <p className="mb-2">Flat 20% Discount</p>
              <button className="px-4 py-2 bg-transparent border-white border text-white uppercase">
                shop all
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
