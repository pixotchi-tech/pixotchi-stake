import React from 'react';
import {
  TransactionButton,
  TransactionButtonReact
} from '@coinbase/onchainkit/transaction';
import { buttonVariants } from '@/components/ui/Button/Button'; // Adjust the import path as needed
import { cn } from '@/lib/utils'; // Ensure this utility is available
import './style.scss'; // Make sure this import is correct

interface StyledTransactionButtonProps extends TransactionButtonReact {
  variant?: 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  wrapperClassName?: string;
}

const StyledTransactionButton: React.FC<StyledTransactionButtonProps> = ({
  text,
  variant = 'primary',
  size = 'default',
  className,
  wrapperClassName,
  ...props
}) => {
  const shouldWrap = variant !== 'ghost' && variant !== 'link';

  const buttonContent = (
    <TransactionButton
      {...props}
      className={cn(
        buttonVariants({ variant, size }),
        'nesui-rounded-border relative select-none m-0 text-center align-middle border-solid border-4 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors',
        'after:absolute after:top-[-4px] after:right-[-4px] after:bottom-[-4px] after:left-[-4px]',
        'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed',
        `shadow-${variant || 'primary'}`,
        className
      )}
      text={text !== undefined || "." || "" ? text : 'loading'}
    >
    </TransactionButton>
  );

  if (shouldWrap) {
    return (
      <div
        className={cn(
          'border-solid border-4 border-black inline-block button-wrapper',
          wrapperClassName
        )}
      >
        {buttonContent}
      </div>
    );
  }

  return buttonContent;
};

export default StyledTransactionButton;
