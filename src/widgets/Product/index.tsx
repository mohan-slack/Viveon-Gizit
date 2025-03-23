'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ProductItemProps } from '@/interface';
import Image from 'next/image';
import React from 'react';

const Product: React.FC<{ data: ProductItemProps }> = ({ data }) => {
  const { imageurl, type, name, description, ctaText, currency, price } = data;
  return (
    <>
      <AspectRatio ratio={4 / 3}>
        <Image
          src={imageurl}
          alt='Background Image'
          fill
          className='h-full w-full rounded-md object-contain'
        />
      </AspectRatio>
      <div className='flex flex-col gap-1 mt-4 lg:h-[180px]'>
        <div className='text-white text-sm font-semibold animate-pulse sm:text-lg lg:text-xl'>
          {type}
        </div>
        <div className='text-white text-sm font-semibold animate-pulse sm:text-lg lg:text-xl'>
          {name}
        </div>
        <div className='text-white text-sm font-light sm:text-base lg:text-lg'>
          {description}
        </div>
        <div className='flex justify-between w-full items-center sm:mt-4'>
          <div className='text-white text-sm font-semibold sm:text-lg lg:text-2xl'>
            {currency} {price}
          </div>
          <button className='bg-[white] p-2 text-sm rounded-lg text-black font-semibold sm:text-base lg:text-lg sm:hover:font-bold hover:cursor-pointer sm:p-'>
            {ctaText}
          </button>
        </div>
      </div>
    </>
  );
};

export default Product;
