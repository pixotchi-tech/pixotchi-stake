import * as React from 'react';

import { cn } from '@/lib/utils';

import './style.scss';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string | false;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <div className="w-full flex flex-col items-start relative">
        <div
          className={cn(
            'w-full input-wrapper border-solid border-2 border-black',
            error ? 'error' : ''
          )}
        >
          <input
            type={type}
            className={cn(
              `nesui-rounded-border flex h-9 w-full rounded-md
              bg-transparent px-3 py-1 text-sm shadow-sm transition-colors
              file:border-0 file:bg-transparent file:text-sm file:font-medium
              placeholder:text-muted-foreground focus-visible:outline-none
              disabled:cursor-not-allowed disabled:opacity-50`,
              className
            )}
            ref={ref}
            {...props}
          />
        </div>
        {error ? (
          <p className="absolute top-[100%] left-0 text-xs text-accent font-normal leading-[18px] ml-1">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
