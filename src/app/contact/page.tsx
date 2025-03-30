'use client';

import { contactData } from '@/constants/data';
import { Mail } from 'lucide-react';
import React, { useState } from 'react';
import QRCode from 'react-qr-code';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const { title, description, email } = contactData;
  const [emailId, setEmailId] = useState<string>('');
  const [success, setSuccess] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID || '';
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID || '';
    const userID = process.env.NEXT_PUBLIC_USER_ID || '';
    if (emailId?.length) {
      emailjs
        .send(
          serviceID,
          templateID,
          {
            from_name: emailId,
            message: emailId,
          },
          userID
        )
        .then(
          (response) => {
            console.log('Email sent!', response.status, response.text);
            setSuccess(() => true);
            setTimeout(() => {
              setSuccess(() => false);
            }, 3000);
          },
          (error) => {
            console.error('Failed to send email:', error);
          }
        )
        .finally(() => {
          setEmailId('');
        });
    }
  };

  return (
    <div className='w-full bg-[black] text-white p-10 text-center space-y-8'>
      <div className='text-base font-semibold lg:text-2xl animate-pulse'>
        {title}
      </div>
      <div className='text-sm font-light lg:text-lg'>{description}</div>
      <div className='flex gap-4 justify-center'>
        <input
          type='email'
          className='border-b border-[white] focus:outline-none focus:border-b focus:border-[white] bg-transparent'
          onChange={(e) => {
            const text = e.target.value;
            setEmailId(() => text);
          }}
          value={emailId}
        />
        <button onClick={handleSubmit} className='cursor-pointer'>
          <Mail className='text-[white] w-8 h-8 animate-spin' />
        </button>
      </div>
      {success && (
        <div className='text-sm text-[#78ffd6] sm:text-base'>
          Your message has been sent !
        </div>
      )}
      <div className='w-full flex items-center justify-center mt-6'>
        <QRCode
          size={200}
          value={`mailto:${process.env.NEXT_PUBLIC_CUSTOMER_CARE_EMAIL}`}
        />
      </div>
    </div>
  );
};

export default Contact;
