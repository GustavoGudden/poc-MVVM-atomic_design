'use client';

import { HomeTemplate } from '@/components/templates/homeTemplate';
// View Model
import { useHomeViewModel } from './view.model';

// Mockdata

export default function HomeView() {
  const { sendAlertToScreen, onClickProductCard } = useHomeViewModel();

  return <HomeTemplate sendAlertToScreen={sendAlertToScreen} onClickProductCard={onClickProductCard} />;
}
