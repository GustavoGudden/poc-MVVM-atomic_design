'use client';

import { ContactTemplate } from '@/components/templates/contactTemplate';
// View Model
import { useContactModel } from './model.view';
// template

export default function ContactView() {
  const {} = useContactModel();

  return <ContactTemplate />;
}
