import type { ReactNode } from 'react';
import clsx from 'clsx';

type BoundedProps = {
  as?: 'div' | 'section' | 'header';
  yPadding?: 'sm' | 'base' | 'lg';
  collapsible?: boolean;
  className?: string;
  children?: ReactNode;
};

export function Bounded({
  as: Comp = 'div',
  yPadding = 'base',
  collapsible = true,
  className,
  children,
}: BoundedProps) {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
        'px-6',
        yPadding === 'sm' && 'py-6 md:py-8',
        yPadding === 'base' && 'py-10 md:py-14',
        yPadding === 'lg' && 'py-16 md:py-24',
        className
      )}
    >
      <div className='mx-auto w-full max-w-7xl'>{children}</div>
    </Comp>
  );
}
