'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import './style.scss';

const progressVariants = cva('relative h-full w-full overflow-hidden', {
  variants: {
    color: {
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      accent: 'bg-accent',
    },
  },
  defaultVariants: {
    color: 'primary',
  },
});

interface ProgressProps
  extends Omit<
      React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>,
      'color'
    >,
    VariantProps<typeof progressVariants> {
  value?: number;
}

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressProps
>(({ className, value, color, ...props }, ref) => (
  <div
    className={cn(
      'progress-wrapper border-solid h-8 border-4 border-black',
      className
    )}
  >
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'nesui-rounded-border',
        `${progressVariants({ color })}/20`
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          'h-full w-full flex-1 transition-all',
          progressVariants({ color })
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  </div>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
