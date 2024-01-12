import { ContactContainer } from '@/components/organisms/ContactContainer';
import { ProductPath } from '@/components/organisms/productPath';
import { FC } from 'react';

export const ContactTemplate: FC = () => {
  return (
    <section className="xl:px-20 px-4">
      <ProductPath page="Home" category="Contact" />
      <ContactContainer />
    </section>
  );
};
