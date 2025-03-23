'use client';

import { AspectRatio } from '@/components/ui/aspect-ratio';
import {
  BTN_BG_BLACK,
  homeData,
  images,
  imagesD,
  TEXT_WHITE,
} from '@/constants/data';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const Home: React.FC<{
  action: (params: { type: string }) => void;
}> = ({ action }) => {
  const { heading, subHeading, cta_one, cta_two } = homeData;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  useEffect(() => {
    const intervalId = setInterval(nextImage, 4000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className='relative w-full'>
      <div className='w-full sm:hidden md:hidden lg:hidden'>
        <AspectRatio ratio={1 / 1}>
          <Image
            src={images[currentImageIndex]?.url}
            alt='Background Image'
            fill
            style={{ objectFit: 'cover' }}
            className='h-full w-full object-contain'
          />
        </AspectRatio>
      </div>
      <div className='hidden w-full sm:flex w-full flex-col justify-center items-center'>
        <Image
          src={imagesD[0]?.url}
          alt='Background Image'
          style={{ objectFit: 'cover' }}
          className='object-contain'
          width={800}
          height={800}
        />
      </div>
      <div
        className={`absolute top-20 left-0 right-0  flex justify-center items-center p-5 sm:top-80`}
      >
        <div className={`text-center p-5`}>
          <h1
            className={`text-3xl font-bold mb-4 motion-safe:animate-bounce  ${
              TEXT_WHITE.includes(currentImageIndex + 1)
                ? 'text-[white]'
                : 'text-[black]'
            } sm:text-[white]`}
          >
            {heading}
          </h1>
          <p
            className={`mb-6 font-semibold text-sm ${
              TEXT_WHITE.includes(currentImageIndex + 1)
                ? 'text-[white]'
                : 'text-[black]'
            }`}
          >
            {subHeading}
          </p>
          <div className={`flex gap-2 items-center justify-center text-white`}>
            <button
              className={`p-3 font-semibold text-xs rounded-lg ${
                BTN_BG_BLACK.includes(currentImageIndex + 1)
                  ? 'bg-[black] opacity-[0.5]'
                  : 'bg-transparent border border-1-white'
              } sm:text-lg cursor-pointer hover:font-extrabold hover:bg-[#fdc830] hover:border-none`}
              onClick={() => action({ type: 'shop now' })}
            >
              {cta_one}
            </button>
            <button
              className={`p-3 font-semibold text-xs rounded-lg ${
                BTN_BG_BLACK.includes(currentImageIndex + 1)
                  ? 'bg-[black] opacity-[0.5]'
                  : 'bg-transparent border border-1-white'
              } sm:text-lg cursor-pointer hover:font-extrabold hover:bg-[#fdc830] hover:border-none`}
              onClick={() => action({ type: 'learn more' })}
            >
              {cta_two}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
