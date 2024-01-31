import React from 'react';
import BrandSet from './BrandSet';
import { connectToDatabase } from '@/lib/mongodb';
import SavvyPng from '../public/Images/savvylogo.png'
import Image from 'next/image';

export const dynamic = 'force-dynamic';

interface Product {
    title: string;
    price: string;
    storage: string;
    color: string;
    brand: string;
    image: string;
    url: string;
    _id: string;
  }
  
const Home = async () => {
  const { db } = await connectToDatabase();
  const data = await db.collection('products').find({}).toArray();
  const initialProducts: Product[] = JSON.parse(JSON.stringify(data));
 

  return (
    <>
    <div className='bg-night flex justify-center overflow-hidden'>
    <div className="grid gap-4 p-3 grid-cols-3 xl:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1">
    <BrandSet  initialProducts={initialProducts}/>
    </div>
    </div>
    </>
 );
}

export default Home;
