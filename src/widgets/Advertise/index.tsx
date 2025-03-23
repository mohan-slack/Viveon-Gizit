'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { AdvertiseData } from '@/constants/data';
import { AudioLines } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const Advertise: React.FC = () => {
  const { heading, imageUrl } = AdvertiseData;
  return (
    <div className=''>
      <div className='text-base font-semibold text-center px-6 mb-5 lg:text-xl'>
        {heading}
      </div>
      <div className='relative w-full flex flex-col lg:justify-between lg:items-center'>
        <div className='w-full lg:w-3/5 lg:h-[750px]'>
          <AspectRatio ratio={1 / 1}>
            <Image
              src={imageUrl}
              alt='Background Image'
              fill
              style={{ objectFit: 'cover' }}
              className='h-full w-full object-contain'
            />
          </AspectRatio>
        </div>
        <div
          className={`absolute top-25 left-0 right-0  flex justify-center items-center p-5 sm:top-65`}
        >
          <div
            className={`text-center p-5 flex flex-col gap-5 items-center justify-center`}
          >
            <h1
              className='text-2xl font-bold'
              style={{
                background:
                  'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              The Future of Wearable Technology
            </h1>
            <AudioLines className='w-10 h-10 text-[#f64f59] animate-ping' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advertise;
