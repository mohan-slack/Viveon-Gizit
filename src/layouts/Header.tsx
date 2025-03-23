'use client';

import React from 'react';
import { CustomHeaderProps } from '@/interface';
import { Menu, PanelBottomClose, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { menuData } from '@/constants/data';

const CustomHeader: React.FC<{
  headerData: CustomHeaderProps;
  actionClick: (params: { type: string }) => void;
  action: string | null;
}> = ({ headerData, actionClick, action }) => {
  const { companyName, showShopingCart, icon } = headerData;
  const router = useRouter();
  const path = usePathname();
  const handleClick = () => {
    router.push('/');
  };

  return (
    <div className='w-full bg-[black] flex justify-between items-center px-5'>
      <div className='flex lg:hidden'>
        {action === 'menu' ? (
          <PanelBottomClose
            className='text-white'
            onClick={() => actionClick({ type: 'close' })}
          />
        ) : (
          <Menu
            className='text-white'
            onClick={() => actionClick({ type: 'menu' })}
          />
        )}
      </div>
      {icon ? (
        <Image
          alt='logo'
          src={icon}
          height={100}
          width={200}
          className='animate-pulse'
          onClick={handleClick}
        />
      ) : (
        <div className='text-white font-bold text-base py-5'>{companyName}</div>
      )}
      <div className='flex gap-10'>
        <div className='hidden lg:flex lg:space-x-10'>
          {menuData?.content?.map(({ heading, redirectLink }) => (
            <div key={heading} className='font-medium text-lg text-[white]'>
              <a
                href={redirectLink}
                className={`hover:underline underline-offset-8 ${
                  path === redirectLink
                    ? 'underline underline-offset-8 text-[white]'
                    : ''
                }`}
                target='_self'
                rel='noopener noreferrer'
              >
                {heading}
              </a>
            </div>
          ))}
        </div>
        <ShoppingCart
          className={`text-white ${!showShopingCart ? 'invisible' : ''}`}
        />
      </div>
    </div>
  );
};

export default CustomHeader;
