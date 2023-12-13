import React, { ComponentProps, FC } from 'react';

type TextProps = ComponentProps<'h1'>;

export const Text: FC<TextProps> = ({ className, children }) => {
  return <h1 className={className}>{children}</h1>;
};
