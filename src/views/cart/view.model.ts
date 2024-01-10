import { useRouter } from 'next/navigation';
import { CartModel } from './model';
import { Products, productCart } from '@/mocks/data/responseData.mock';
import { ICart } from '@/models/CartModel';
import { useEffect, useState } from 'react';

export const useCartModel = (): CartModel => {
  const [handleAmount, setAmount] = useState<{ amount: number; id: String }>({ amount: 0, id: '0' });

  const [totalValueCart, setTotalValueCart] = useState(0);

  const getProductById = (id: string) => {
    return Products.data.find((product) => product.id === id)!;
  };

  const getAllProductsOnCartWithAmout = (cart: ICart[]) => {
    return cart.map((cardItem) => {
      const product = getProductById(cardItem.productId);
      return {
        ...product,
        amount: cardItem.amount,
      };
    });
  };

  const handleChangeAmount = (amount: number, id: string) => {
    setAmount((prevAmount) => ({ amount, id }));
    const indexToUpdate = productCart.data.findIndex((item) => item.productId === id);
    if (indexToUpdate !== -1) {
      const updatedItem = { ...productCart.data[indexToUpdate] };
      updatedItem.amount = amount;
      productCart.data = [...productCart.data.slice(0, indexToUpdate), updatedItem, ...productCart.data.slice(indexToUpdate + 1)];
    }
  };

  const calculateTotalValue = (cart: ICart[]) => {
    const totalValue = cart.reduce((accumulator, cartItem) => {
      const product = getProductById(cartItem.productId);
      return accumulator + product.price * cartItem.amount;
    }, 0);

    setTotalValueCart(totalValue);
  };

  useEffect(() => {
    calculateTotalValue(productCart.data);
  }, [handleAmount, calculateTotalValue]);

  return { getProductById, getAllProductsOnCartWithAmout, totalValueCart, setAmount, handleChangeAmount };
};
