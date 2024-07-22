import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

import './style.scss';

const alertVariants = cva(
  `alert relative w-full rounded-md px-4 py-3 text-sm
  before:absolute before:w-6 before:h-2 before:-bottom-[14px]
  after:absolute after:w-4 after:h-1 after:mr-2 after:-bottom-[18px]
  [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7`,
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        destructive:
          'text-destructive after:color-destructive dark:border-destructive [&>svg]:text-destructive',
      },
      side: {
        left: 'before:left-2 after:left-2',
        right: 'after:mr-1 before:right-2 after:right-2',
      },
    },
    defaultVariants: {
      variant: 'default',
      side: 'left',
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, side, ...props }, ref) => (
    <div className={cn(`alert-wrapper border-solid border-4 mb-6`, variant)}>
      <div
        ref={ref}
        role="alert"
        className={cn(
          alertVariants({ variant, side }),
          className,
          variant,
          side
        )}
        {...props}
      />
    </div>
  )
);
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };
