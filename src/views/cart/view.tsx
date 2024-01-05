'use client';

// template
import { CartTemplate } from '@/components/templates/cartTemplate';

// View Model
import { useCartModel } from './view.model';

export default function CartView() {
  const { getAllProductsOnCartWithAmout, totalValueCart, handleChangeAmount, setAmount } = useCartModel();

  return (
    <CartTemplate
      getAllProductsOnCartWithAmout={getAllProductsOnCartWithAmout}
      setAmount={setAmount}
      totalValueCart={totalValueCart}
      handleChangeAmount={handleChangeAmount}
    />
  );
}
