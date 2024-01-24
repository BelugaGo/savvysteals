import React from 'react';
import BrandSet from './BrandSet';
import { connectToDatabase } from '@/lib/mongodb';

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
    <div className='bg-white flex justify-center'>
    <div className="grid grid-cols-1 border-[3px] w-full gap-7 p-5 sm:grid-cols-2 md:grid-cols-3">
    <BrandSet  initialProducts={initialProducts}/>
    </div>
    </div>
 );
}

export default Home;
