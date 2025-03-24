'use client';

import React from 'react';
import { CustomFooterProps } from '@/interface';
import QRCode from 'react-qr-code';

const CustomFooter: React.FC<{ footerData: CustomFooterProps }> = ({
  footerData,
}) => {
  const { contents } = footerData;
  return (
    <div className='w-full flex flex-col sm:flex sm:flex-row sm:bg-[#F6F4F4]'>
      <div className='w-full flex flex-col items-center gap-2 bg-[#F6F4F4] p-10'>
        {contents?.map(({ heading, redirectLink }) => (
          <div key={heading} className='text-base font-light'>
            <a
              href={redirectLink}
              className='hover:underline underline-offset-8'
              target='_self'
              rel='noopener noreferrer'
            >
              {heading}
            </a>
          </div>
        ))}
      </div>
      <div className='hidden sm:flex sm:flex-col sm:gap-6 w-full items-center justify-center mt-6'>
        <div className='text-sm font-semibold text-[#005aa7]'>
          Scan the QR code with your phone to access the website on the go!
        </div>
        <QRCode size={200} value="https://viveon-bk3q6qjmm-shreyans-projects-f57ca163.vercel.app/" />
      </div>
    </div>
  );
};

export default CustomFooter;
