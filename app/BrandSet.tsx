'use client';
import React, { useState, MouseEvent } from "react";
import 'react-loading-skeleton/dist/skeleton.css'


interface Product {
  title: string;
  image: string;
  url: string;
  brand: string;
  price: number;
  storage: string;
  color: string;
}

export default function Brandset({ initialProducts }: any)  {
const [brand, setBrand] = useState('Apple');
const [loading , setLoading] = useState(false);
const products = initialProducts;
const productsFilter = ['Apple', 'Samsung', 'Google', 'Sony', 'LG', 'Nokia', 'OnePlus']

const handleBrand = (e: MouseEvent<HTMLButtonElement>) => {
    const selectedBrand = e.currentTarget.value;
    setLoading(true);
    setTimeout(() => {
    setBrand(selectedBrand);
    setLoading(false);
    }
    , 1000);
  };
  
  function ProductItem({ item }: { item: Product }) {
    return (
      <div className="p-3 flex flex-col justify-center items-center space-y-2">
        <div>{item.title}</div>
        <img className='w-[30%] h-auto' src={item.image} alt={item.title} loading="lazy" />
        <a href={item.url} target='_blank' className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Buy Me</button></a>
        <div>Brand: {item.brand}</div>
        <div className='text-emerald-400 text-[25px]'>Price: {item.price}</div>
        <div>Storage: {item.storage}</div>
        <div>Color: {item.color}</div>
      </div>
    );
  }
  

return (

 <div className='relative flex justify-center h-auto w-full overflow-hidden'>
  <div className='grid grid-cols-1 gap-7 w-full h-full border-[3px] justify-center content-center p-5 sm:grid-cols-3 lg:grid-cols-4 auto-rows-min'>
    <div className='overflow-scroll hide-scrollbar col-span-full text-white p-4 text-center space-x-3 whitespace-nowrap'>
      {productsFilter.map((item: string, index: number) => {
        return (
        <button tabIndex={0} key={index} value={item} onClick={handleBrand} className='w-auto text-2xl text-black focus:text-emerald-400'>{item}</button>
        )
      }
      )}
    </div>
    <>
    {products.map((item: Product, index: number) => {
      const itemBrandUpper = item.brand ? item.brand.toUpperCase() : '';
      const brandUpper = brand.toUpperCase();

  if (itemBrandUpper === brandUpper) { 
    return (
      <div key={index} className='group grid justify-items-center shadow-2xl rounded-md text-center border border-emerald-400 bg-white h-auto text-black hover:translate-y-[-25px] transition-all duration-300 cursor-pointer hover:border-[5px] border-emerald-400'>
           {loading ? <> <div className="bg-slate-900 h-full w-full fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 opacity-50"></div><span className="loading loading-dots w-[5rem] bg-red-700 fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50"></span></> : <ProductItem item={item} />}
      </div>
    )
  }
})}
    </>
  </div>
  </div>
 )
}