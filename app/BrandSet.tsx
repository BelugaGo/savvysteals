'use client';
import React, { useState, MouseEvent } from "react";
import Image from 'next/image'

export const dynamic = 'force-dynamic'

interface Product {
  title: string;
  image: string;
  url: string;
  brand: string;
  price: string;
  storage: string;
  color: string;
  _id: string;
}



export default function Brandset({ initialProducts } : any)  {
const uniqueBrands = Array.from(new Set(initialProducts.map((brands: any) => brands.brand)));
const [products, setProducts] = useState('Apple')


const handleBrand = (e: MouseEvent<HTMLButtonElement>) => {
  const selectedBrand = e.currentTarget.value
  setProducts(selectedBrand)
}


return (
      <>
      <div className='overflow-scroll hide-scrollbar col-span-full text-black p-4 text-center space-x-3 whitespace-nowrap'>
  {uniqueBrands.map((products: any) => (
  <button key={products} onClick={handleBrand} value={products} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{products}</button>
  ))}
  </div> 
      {initialProducts.map((product: Product) => {
        if(products === product.brand) return (
        <div key={product._id} className="group bg-white flex flex-col h-auto justify-center border items-center text-black text-center w-auto space-y-3 p-2 shadow rounded-md transition-[shadow,border,transform] ease-in-out duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-2xl hover:border-[5px] border-emerald-400">
        <h1 className="text-2xl">{product.title}</h1>
        <Image className="w-auto" src={product.image} alt={product.title} width={150} height={150} />
        <a href={product.url} target='_blank' className='opacity-0 group-hover:opacity-100 transition ease-out duration-300'><button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded btn btn-lg'>Buy Me</button></a>
        <h3 className="text-2xl">Brand: {product.brand}</h3>
        <h3 className='text-emerald-400 text-4xl'>Price: {product.price}</h3>
        <h3 className="text-2xl">Storage: {product.storage}</h3>
        <h3 className="text-2xl">Color: {product.color}</h3>
        </div> 
        )
      })}
       </>
 )
  }
