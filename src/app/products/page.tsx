'use client';

import { Card, CardContent } from '@/components/ui/card';
import { CarouselItem } from '@/components/ui/carousel';
import { allProducts } from '@/constants/data';
import CustomCarousel from '@/widgets/Carousel';
import Product from '@/widgets/Product';
import { usePathname } from 'next/navigation';
import React from 'react';

const Products: React.FC = () => {
  const { title, lists } = allProducts;
  const router = usePathname();
  return (
    <div
      className={`w-full p-4 flex flex-col justify-center items-center lg:px-0 ${
        router === '/products'
          ? 'mb-15 sm:px-40 sm:my-20 lg:px-40 lg:mt-20 lg:mb-0'
          : ''
      }`}
    >
      <div className='text-2xl font-bold mb-4 sm:text-3xl'>{title}</div>
      <div className='w-full mt-12'>
        <CustomCarousel>
          {lists?.map((item, index) => (
            <CarouselItem key={index} className='basis-1/2'>
              <div className='p-1 bg-[black] rounded-3xl lg:hover:bg-[#544a7d] lg:hover:cursor-pointer'>
                <Card className='border-none'>
                  <CardContent className='flex flex-col justify-center w-full'>
                    <Product data={item} />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CustomCarousel>
      </div>
    </div>
  );
};

export default Products;
