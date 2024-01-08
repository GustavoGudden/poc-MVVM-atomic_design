'use client';

// View Model
import { useAboutModel } from './view-model';

// template
import { AboutTemplate } from '@/components/templates/aboutTemplate';

export default function AboutView() {
  const {} = useAboutModel();

  return <AboutTemplate />;
}
