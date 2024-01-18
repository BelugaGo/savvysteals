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
  }
  
const Home: React.FC = async () => {
    const { db } = await connectToDatabase();
    const data = await db.collection('products').find({}).toArray();
    const products: Product[] = JSON.parse(JSON.stringify(data));
    
  return (
   <div className='bg-white'>
    <BrandSet initialProducts={products} />
    </div>
    
 );
};

export default Home;
