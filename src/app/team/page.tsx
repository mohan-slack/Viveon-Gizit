'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { directors } from '@/constants/data';
import { User } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React from 'react';

const Team: React.FC = () => {
  const { title, lists } = directors;
  const router = usePathname();
  return (
    <div
      className={`flex flex-col items-center gap-5 w-full ${
        router === '/team' ? 'lg:px-40 my-20' : 'lg:my-20'
      }`}
    >
      <div className='text-2xl font-semibold'>{title}</div>
      <div className='flex mx-auto max-w-xs px-5 sm:hidden'>
        <Carousel className='w-full max-w-xs'>
          <CarouselContent>
            {lists?.map(({ name, role, description }) => (
              <CarouselItem key={role}>
                <Card>
                  <CardContent className='w-full flex p-6'>
                    <div className='w-full flex flex-col items-center gap-5'>
                      <div
                        className='rounded-full p-3'
                        style={{
                          background:
                            'linear-gradient(to right, #ec008c, #fc6767)',
                        }}
                      >
                        <User className='w-10 h-10 text-[white]' />
                      </div>
                      <div className='text-center space-y-2'>
                        <div className='text-base font-bold'>{name}</div>
                        <div className='text-base font-bold'>{role}</div>
                        <div className='text-sm font-light'>{description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className='hidden sm:flex sm:px-[60px] lg:w-full lg:p-[20px]'>
        <Carousel
          opts={{
            align: 'start',
          }}
          orientation='horizontal'
          className='w-full'
        >
          <CarouselContent>
            {lists?.map(({ name, role, description }) => (
              <CarouselItem key={role} className='w-full basis-1/2'>
                <Card>
                  <CardContent className='w-full flex p-6'>
                    <div className='w-full flex flex-col items-center gap-5'>
                      <div
                        className='rounded-full p-3'
                        style={{
                          background:
                            'linear-gradient(to right, #ec008c, #fc6767)',
                        }}
                      >
                        <User className='w-10 h-10 text-[white]' />
                      </div>
                      <div className='text-center space-y-2 sm:h-[110px]'>
                        <div className='text-base font-bold'>{name}</div>
                        <div className='text-base font-bold'>{role}</div>
                        <div className='text-sm font-light'>{description}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Team;
