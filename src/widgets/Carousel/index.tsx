'use client';

import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { CustomCarouselProps } from '@/interface';
import React from 'react';

const CustomCarousel: React.FC<CustomCarouselProps> = ({ children }) => {
  return (
    <div className='w-full'>
      <div className='flex w-full lg:hidden'>
        {' '}
        <Carousel
          opts={{
            align: 'start',
          }}
          orientation='vertical'
          className='w-full'
        >
          <CarouselContent className='-mt-1 h-[450px] sm:h-[800px]'>
            {children}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className='hidden lg:flex w-full'>
        {' '}
        <Carousel
          opts={{
            align: 'start',
          }}
          orientation='horizontal'
          className='w-full'
        >
          <CarouselContent className='h-[800px]'>{children}</CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default CustomCarousel;
