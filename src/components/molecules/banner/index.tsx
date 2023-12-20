import { ComponentProps, FC } from 'react';

type BannerProps = ComponentProps<'div'>;

export const Banner: FC<BannerProps> = ({ className, children }) => {
  return (
    <div className={className} style={{ backgroundSize: '100% 100%' }}>
      {children}
    </div>
  );
};
