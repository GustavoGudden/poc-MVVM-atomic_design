import { IProduct } from '@/models/ProductModel';

interface MockData {
  data: IProduct[];
}

export const Products: MockData = {
  data: [
    {
      id: '1',
      name: 'LCD Monitor',
      price: 650,
      description: 'produto bom',
      avaliation: 1,
      imageBannerIcon: '/images/productsImages/bolsa.png',
    },
    {
      id: '2',
      name: 'H1 Gamepad',
      price: 550,
      description: 'produto bom',
      avaliation: 1,
      imageBannerIcon: '/images/productsImages/control.png',
    },
    {
      id: '3',
      name: 'Blusa',
      price: 400,
      description: 'produto bom',
      avaliation: 1,
      imageBannerIcon: '/images/productsImages/blusa.png',
    },
    {
      id: '3',
      name: 'name of product',
      price: 45.5,
      description: 'produto bom',
      avaliation: 1,
      imageBannerIcon: '/images/productsImages/waterColer.png',
    },
    {
      id: '4',
      name: 'name of product',
      price: 45.5,
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
      amount: 1,
    },
    {
      productId: '2',
      amount: 1,
    },
  ],
};
