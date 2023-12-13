import { HomeViewModel } from './model';

export const useHomeViewModel = (): HomeViewModel => {
  const sendAlertToScreen = () => {
    window.alert('voce selecionou um produto');
  };

  return { sendAlertToScreen };
};
