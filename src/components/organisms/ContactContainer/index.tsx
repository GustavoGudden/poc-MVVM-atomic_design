import { FC } from 'react';
import { ContactArea } from '../contactArea';
import { ContactForm } from '../contactForm';

export const ContactContainer: FC = () => {
  return (
    <div className="flex w-full flex-wrap gap-12 xs:my-16 my-4">
      <ContactArea />
      <ContactForm />
    </div>
  );
};
