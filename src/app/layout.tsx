'use client';

import { Montserrat } from 'next/font/google';
import './globals.css';
import CustomLayout from '@/layouts/page';
import { footerData, headerData, menuData } from '@/constants/data';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} antialiased`}>
        <CustomLayout
          headerData={headerData}
          footerData={footerData}
          menuData={menuData}
        >
          {children}
        </CustomLayout>
      </body>
    </html>
  );
}
