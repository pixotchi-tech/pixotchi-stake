import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import './style.scss';

const buttonVariants = cva(
  `relative select-none m-0 text-center align-middle border-solid border-4 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors
    after:absolute after:top-[-4px] after:right-[-4px] after:bottom-[-4px] after:left-[-4px]
    focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed`,
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-primary-foreground hover:bg-primary/90 active:bg-primary/70',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80 after:shadow-secondary-foreground',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-9',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  wrapperClassName?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, wrapperClassName, variant, size, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <div
        className={cn(
          'border-solid border-4 border-black inline-block button-wrapper',
          wrapperClassName
        )}
      >
        <Comp
          className={cn(
            buttonVariants({ variant, size, className }),
            `shadow-${variant || 'primary'}`
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
