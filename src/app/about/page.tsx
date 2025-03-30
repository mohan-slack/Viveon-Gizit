'use client';

import { uspPoints } from '@/constants/data';
import { BellRing, Headphones, PhoneCall, Shield, Truck } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { JSX } from 'react';

type IconsMappingType = Record<string, JSX.Element>;

const iconsMapping: IconsMappingType = {
  'Premium Sound': <Headphones className='w-8 h-8 text-[black]' />,
  'Smart Technology': <BellRing className='w-8 h-8 text-[black]' />,
  '6 Months Warranty': <Shield className='w-8 h-8 text-[black]' />,
  'Free Shipping': <Truck className='w-8 h-8 text-[black]' />,
  'Customer Care': <PhoneCall className='w-8 h-8 text-[black]' />,
  'Limited Edition': <BellRing className='w-8 h-8 text-[black]' />,
};

const About: React.FC = () => {
  const { title, lists } = uspPoints;
  const router = usePathname();
  return (
    <div
      className={`w-full flex p-4 flex-col items-center gap-7 ${
        router === '/about' ? 'lg:px-40 mt-10 mb-5' : ''
      }`}
    >
      <div className='text-2xl font-semibold lg:text-3xl'>{title}</div>
      <div className='flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:justify-around'>
        {lists?.map(({ title, description }) => (
          <div
            key={title}
            className='w-full rounded-lg p-10 flex flex-col items-center text-center shadow gap-2 bg-gradient-to-r from-[#076585] to-[#fff] lg:w-[600px] lg:h-[300px] lg:hover:bg-none lg:hover:bg-[black] lg:hover:text-[white] lg:hover:cursor-pointer'
          >
            <div className='bg-[white] p-3 rounded-full animate-bounce'>
              {iconsMapping[title]}
            </div>
            <div className='text-sm font-semibold lg:text-lg lg:hover:text-[white]'>
              {title}
            </div>
            <div className='text-sm font-light lg:text-lg lg:hover:text-[white]'>
              {description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
