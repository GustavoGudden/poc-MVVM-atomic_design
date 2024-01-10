import { FC } from 'react';
import { ContactArea } from '../contactArea';
import { ContactForm } from '../contactForm';

export const ContactContainer: FC = () => {
  return (
    <div className="flex w-full gap-12 my-16">
      <ContactArea />
      <ContactForm />
    </div>
  );
};
