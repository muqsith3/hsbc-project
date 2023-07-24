// SpecialProducts.jsx
import React from 'react';
import SpecialProduct from '../../data/SpecialProducts';
import {BiSolidRightArrowCircle} from 'react-icons/bi'

const imageContainerStyle = {
  height: '400px', // Set your desired height here
};

export default function SpecialProducts() {
  return (
    <>
    <div className='text-2xl font-bold text-center py-5'>
        <h1>Weekend <span className='text-[#F6A453]'>best products</span></h1>
        <h3 className='text-lg mt-2 font-normal'>Check out our daily special product that you can get with +20% OFF!</h3>
    </div>
    <div className='flex justify-center py-10'>
      {SpecialProduct.map((product, index) => (
        <div key={index} className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg mx-4">
          <div style={imageContainerStyle} className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
            <img src={product.img} alt={product.title} className="object-cover w-full h-full" />
            <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
            
          </div>
          <div className="p-6">
            <div className="mb-3 flex items-center justify-between">
              <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                {product.title}
              </h5>
            </div>
            <div className="flex font-semibold">
                <s className="block text-base leading-relaxed text-gray-400 antialiased pr-5">
                {product.discount}
                </s>
                <p className='text-lg'>
                    {product.price}
                </p>
            </div>
          </div>
          <div className="p-6 pt-3">
            <button
              className="w-[45%] flex select-none rounded-lg bg-[#F6A453] py-2 px-5 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              <div className='flex items-center justify-center'>
                Add to Cart 
                <div className='ml-4'>
                    <BiSolidRightArrowCircle size="1rem" />
                </div>
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
