export interface CustomHeaderProps {
  companyName: string;
  showShopingCart: boolean;
  icon?: React.ReactNode;
}

export interface CustomFooterProps {
  contents: {
    heading: string;
    redirectLink: string;
  }[];
}

export interface CustomLayoutProps {
  children: React.ReactNode;
  headerData: CustomHeaderProps;
  footerData: CustomFooterProps;
  menuData: menuDataProps;
}

export interface menuDataProps {
  content: {
    heading: string;
    redirectLink: string;
  }[];
}

export interface MenuBarProps {
  isOpen: boolean;
  close: () => void;
  menuData: menuDataProps;
}

export interface HomePageProps {
  heading: string;
  subHeading: string;
  cta_one: string;
  cta_two: string;
}

export interface CustomCarouselProps {
  children: React.ReactNode;
}

export interface ProductItemProps {
  imageurl: string;
  type: string;
  name: string;
  description: string;
  ctaText: string;
  currency: string;
  price: string;
}

export interface ProductProps {
  title: string;
  lists: ProductItemProps[];
}

export interface UspPointsProps {
  title: string;
  lists: { title: string; description: string }[];
}

export interface DirectorsProps {
  title: '';
  lists: { name: string; role: string; description: string }[];
}

export interface contactProps {
  title: string;
  description: string;
  email: string;
}

export interface AdvertiseProps {
  heading: string;
  imageUrl: string;
}
