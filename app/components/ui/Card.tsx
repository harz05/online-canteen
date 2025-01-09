import { HTMLAttributes } from 'react';
import clsx from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'gradient';
}

export function Card({ variant = 'default', className, children, ...props }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-lg p-6',
        {
          'bg-white shadow-lg': variant === 'default',
          'bg-gradient-to-r from-red-500 to-pink-500 text-white': variant === 'gradient',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}