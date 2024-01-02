import { IProduct } from '@/models/ProductModel';

interface MockData {
  data: IProduct[];
}

export const Products: MockData = {
  data: [
    {
      id: '1',
      name: 'name of product',
      price: 45.5,
      description: 'produto bom',
      avaliation: 1,
    },
    {
      id: '2',
      name: 'name of product',
      price: 45.5,
      description: 'produto bom',
      avaliation: 1,
    },
    {
      id: '3',
      name: 'name of product',
      price: 45.5,
      description: 'produto bom',
      avaliation: 1,
    },
    {
      id: '3',
      name: 'name of product',
      price: 45.5,
      description: 'produto bom',
      avaliation: 1,
    },
    {
      id: '4',
      name: 'name of product',
      price: 45.5,
      description: 'produto bom',
      avaliation: 1,
    },
  ],
};

export const productCart = {
  data: [
    {
      productId: '1',
      amount: 1,
    },
  ],
};
