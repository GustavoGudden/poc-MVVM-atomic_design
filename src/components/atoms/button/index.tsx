import { ComponentProps, FC } from 'react';

type buttonProps = ComponentProps<'button'>;

export const Button: FC<buttonProps> = ({ children, className }) => {
  return <button className={className}>{children}</button>;
};
