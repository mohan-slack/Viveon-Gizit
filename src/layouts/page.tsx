'use client';

import React, { useState } from 'react';
import CustomFooter from './Footer';
import { CustomLayoutProps } from '@/interface';
import CustomHeader from './Header';
import MenuBar from '@/widgets/MenuBar';

const CustomLayout: React.FC<CustomLayoutProps> = ({
  children,
  headerData,
  footerData,
  menuData,
}) => {
  const [action, setAction] = useState<string | null>(null);
  const actionClick = ({ type }: { type: string }) => {
    switch (type) {
      case 'menu':
        setAction(() => 'menu');
        break;
      case 'close':
        setAction(() => null);
        break;
    }
  };
  return (
    <div>
      <CustomHeader
        headerData={headerData}
        actionClick={actionClick}
        action={action}
      />
      {children}
      <CustomFooter footerData={footerData} />
      <MenuBar
        isOpen={action === 'menu'}
        close={() => actionClick({ type: 'close' })}
        menuData={menuData}
      />
    </div>
  );
};

export default CustomLayout;
