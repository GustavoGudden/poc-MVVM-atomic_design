import { IProduct } from '@/models/ProductModel';
import { IOwners } from '@/models/owners.model';

interface MockData {
  data: IProduct[];
}

interface IOwnersMock {
  data: IOwners[];
}

export const Products: MockData = {
  data: [
    {
      id: '1',
      name: 'Havic HV G-92 Gamepad',
      price: 192,
      description:
        'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess  free removal Pressure sensitive.',
      avaliation: 1,
      imageBannerIcon: '/images/productsImages/control.png',
    },
    {
      id: '2',
      name: 'Gucci duffle bag',
      price: 960,
      description: 'produto bom',
      avaliation: 1,
      imageBannerIcon: '/images/productsImages/bolsa.png',
    },
    {
      id: '3',
      name: 'The north coat',
      price: 260,
      description: 'The north coat',
      avaliation: 1,
      imageBannerIcon: '/images/productsImages/blusa.png',
    },
    {
      id: '3',
      name: 'RGB liquid CPU Cooler',
      price: 160,
      description: 'Water cooler ',
      avaliation: 1,
      imageBannerIcon: '/images/productsImages/waterColer.png',
    },
    {
      id: '4',
      name: 'Small BookSelf',
      price: 360,
      description: 'produto bom',
      avaliation: 1,
      imageBannerIcon: '/images/productsImages/cadeira.png',
    },
  ],
};

export const productCart = {
  data: [
    {
      productId: '1',
      amount: 2,
    },
    {
      productId: '2',
      amount: 1,
    },
  ],
};

export const owners: IOwnersMock = {
  data: [
    {
      name: 'Tom Cruise',
      function: 'Founder & Chairman',
      socialMedia: ['instaUrl', 'LinkedinUrl', 'TwitterUrl'],
    },
    {
      name: 'Emma Watson',
      function: 'Emma Watson',
      socialMedia: ['instaUrl', 'LinkedinUrl', 'TwitterUrl'],
    },
    {
      name: 'Will Smith',
      function: 'Product Designer',
      socialMedia: ['instaUrl', 'LinkedinUrl', 'TwitterUrl'],
    },
    {
      name: 'Will aaa',
      function: 'Product Designer',
      socialMedia: ['instaUrl', 'LinkedinUrl', 'TwitterUrl'],
    },
  ],
};
