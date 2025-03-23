'use client';

import { Drawer, DrawerContent } from '@/components/ui/drawer';
import { MenuBarProps } from '@/interface';
import React from 'react';

const MenuBar: React.FC<MenuBarProps> = ({ isOpen, close, menuData }) => {
  const { content } = menuData;
  return (
    <Drawer open={isOpen} onClose={close}>
      <DrawerContent className='bg-[black]'>
        <div className='w-full h-svh bg-[black] flex flex-col items-center justify-around'>
          {content?.map(
            ({
              heading,
              redirectLink,
            }: {
              heading: string;
              redirectLink: string;
            }) => (
              <div
                key={heading}
                className='font-bold text-lg text-[white] animate-pulse'
              >
                <a
                  href={redirectLink}
                  className='hover:underline underline-offset-8'
                  target='_self'
                  rel='noopener noreferrer'
                >
                  {heading}
                </a>
              </div>
            )
          )}
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuBar;
