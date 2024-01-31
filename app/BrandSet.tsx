'use client';
import React, { useState, MouseEvent } from "react";
import gsap from "gsap"; 
import { useGSAP } from "@gsap/react";
import Image from 'next/image';
import AppleLogo from '/public/applewhite.svg';
import SamsungLogo from '/public/samsung.svg';
import GoogleLogo from '/public/google-1-1.svg';
import OnePlusLogo from '/public/oneplus-2.svg';
import LGLogo from '/public/lg-electronics.svg';
import SonyLogo from '/public/sony.svg';
import NokiaLogo from '/public/nokia-3.svg';

export const dynamic = 'force-dynamic';

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
const [buttonPressed, setButtonPressed] = useState('Apple');
const container = React.useRef<HTMLDivElement>(null);


const setLogo = (brand: string) => {
  const logoMap: { [key: string]: any } = {
    Apple: AppleLogo,
    SAMSUNG: SamsungLogo,
    Google: GoogleLogo,
    OnePlus: OnePlusLogo,
    LG: LGLogo,
    Sony: SonyLogo,
    Nokia: NokiaLogo,
  };

  return logoMap[brand] || AppleLogo;
};


const handleBrand = (e: MouseEvent<HTMLButtonElement>) => {
  const selectedBrand = e.currentTarget.value;
  setProducts(selectedBrand);
  setButtonPressed(selectedBrand);
}

useGSAP(() => {
  gsap.fromTo(".alltogether", { y: 100 }, {
    opacity: 1,
    y: 0,
    stagger: 0.2,
  });
}, { scope: container });

useGSAP(() => {
  gsap.fromTo(".logoappear", {opacity: 0, y: 400}, {
    opacity: 1,
    y: 0,
  });
}, [setLogo(products)]);

return (
      <>
      <div className="text-center col-span-full relative flex flex-col justify-center items-center">
    <h1 className="text-white text-8xl text-center font-honk xl:text-9xl md:text-6xl xs:text-5xl">Savvy Steals</h1>
    <Image className="z-0 logoappear h-auto" src={setLogo(products)} alt={products} width={150} height={100} />
      </div>
   <div ref={container} className='overflow-scroll hide-scrollbar col-span-full text-black p-4 text-center space-x-3 whitespace-nowrap'>
  {uniqueBrands.map((products: any) => (
  <button key={products} onClick={handleBrand} value={products} className={`opacity-0 alltogether btn h-auto inline-block transition-all duration-300 hover:bg-night-600 text-white font-bold py-2 px-4 rounded 4xl:text-6xl md:text-4xl sm:text-3xl  ${buttonPressed === products ? 'font-honk bg-night-600' : 'bg-tiffany_blue '}`}>{products?.toUpperCase()}</button>
  ))}
  </div> 
      {initialProducts.map((product: Product) => {
        if(products === product.brand) return (
        <div key={product._id} className="z-10 group bg-white flex flex-col h-auto justify-evenly border items-center text-black text-center w-auto space-y-3 p-2 shadow rounded-md transition-[border,transform] ease-in-out duration-300 cursor-pointer hover:-translate-y-3 hover:border-[5px] border-emerald-400 animate-slide-in-bottom">
        <h1 className="md:text-3xl xs:text-2xl">{product.title}</h1>
        <Image className="sm:w-auto xs:w-1/2" src={product.image} alt={product.title} width={150} height={150} />
        <a href={product.url} target='_blank' className='opacity-0 group-hover:opacity-100 transition ease-out duration-300'><button className='bg-tiffany_blue hover:bg-night-600 text-white font-bold py-2 px-4 rounded btn btn-lg'>Buy Me</button></a>
        <h3 className="md:text-3xl sm:text-2xl xs:text-1xl">Brand: {product.brand}</h3>
        <h3 className='text-emerald-400 md:text-3xl sm:text-3xl xs:text-2xl'>Price: {product.price}</h3>
        <h3 className="md:text-3xl sm:text-2xl xs:text-1xl">Storage: {product.storage}</h3>
        <h3 className="md:text-3xl sm:text-2xl xs:text-1xl">Color: {product.color}</h3>
        </div> 
        )
      })}        
       </>
 )
  }
