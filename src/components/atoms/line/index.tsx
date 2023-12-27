import { ComponentProps, FC } from 'react';

type LineProps = ComponentProps<'div'>;

export const Line: FC<LineProps> = ({ className }) => {
  return <div className={className} />;
};

// "border-t-1  mt-4 w-full"
