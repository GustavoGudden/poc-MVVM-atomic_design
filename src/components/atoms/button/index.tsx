import { ComponentProps, FC, MouseEventHandler } from 'react';

type buttonProps = ComponentProps<'button'>;

interface IButton extends buttonProps {
  Onclick: MouseEventHandler<HTMLButtonElement>;
}

export const Button: FC<IButton> = ({ children, className, Onclick }) => {
  return (
    <button className={className} onClick={Onclick}>
      {children}
    </button>
  );
};
