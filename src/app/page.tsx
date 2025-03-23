'use client';

import About from './about/page';
import Contact from './contact/page';
import Home from './home/page';
import Products from './products/page';
import Team from './team/page';
import { useRef } from 'react';
import Advertise from '@/widgets/Advertise';

export default function Main() {
  const productsScrollRef = useRef<HTMLDivElement>(null);
  const aboutScrollRef = useRef<HTMLDivElement>(null);

  const actionClick = ({ type }: { type: string }) => {
    switch (type) {
      case 'shop now':
        if (productsScrollRef?.current) {
          productsScrollRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
        break;
      case 'learn more':
        if (aboutScrollRef?.current) {
          aboutScrollRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest',
          });
        }
        break;
    }
  };

  return (
    <div className='w-full flex items-center justify-center'>
      <div className='flex flex-col items-center w-full h-full gap-2 lg:w-4/5'>
        <div>
          <div className='w-full'>
            <Home action={actionClick} />
          </div>
          <div className='my-10 w-full lg:my-10' ref={productsScrollRef}>
            <Products />
          </div>
          <div className='w-full mt-10 lg:mt-10' ref={aboutScrollRef}>
            <About />
          </div>
          <div className='w-full mt-10'>
            <Advertise />
          </div>
          <div className='w-full mt-10'>
            <Team />
          </div>
          <div className='w-full mt-10'>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
}
