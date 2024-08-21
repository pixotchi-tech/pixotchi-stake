import React, { useState, useEffect } from 'react';
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import type {
  TransactionError,
  TransactionResponse,
} from '@coinbase/onchainkit/transaction';
import type { Address, ContractFunctionParameters } from 'viem';
import { parseEther } from 'viem';
import { erc20Abi, stakeContractAbi, stakeContractConfig } from '@/generated';
import { Button } from '../ui';
import StyledTransactionButton from '../ui/Button/StyledTransactionButton';

type TransactionWrapperWithdrawProps = {
  address: Address;
  amount: string;
  seedTokenAddress: Address;
  stakeContractAddress: Address;
  seedAllowance: bigint;
  onSuccess: () => void;
  onError: (error: TransactionError) => void;
  chainId: number;
};

export default function TransactionWrapperWithdraw({
  address,
  amount,
  seedTokenAddress,
  stakeContractAddress,
  seedAllowance,
  onSuccess,
  onError,
  chainId
}: TransactionWrapperWithdrawProps) {
  const [contracts, setContracts] = useState<ContractFunctionParameters[]>([]);

  useEffect(() => {
    const cleanAmount = amount.replace(/,/g, '');
    let parsedAmount: bigint;
    try {
      parsedAmount = parseEther(cleanAmount);
    } catch (error) {
      console.error('Error parsing amount:', error);
      return; // Exit early if parsing fails
    }

    const newContracts: ContractFunctionParameters[] = [{
      address: stakeContractAddress,
      abi: stakeContractAbi,
      functionName: 'withdraw',
      args: [parsedAmount],
    }];

    setContracts(newContracts);
  }, [address, amount, stakeContractAddress]);

  const handleSuccess = (response: TransactionResponse) => {
    console.log('Transaction successful', response);
    onSuccess();
  };

  return (
    <Transaction
      address={address}
      contracts={contracts}
      chainId={chainId}
      onError={onError}
      onSuccess={handleSuccess}
      capabilities={{
        paymasterService: {
          url: process.env.NEXT_PUBLIC_CDP_API_KEY!,
        },
      }}
    >
      {/* <TransactionButton className="w-full min-h-[48px] -mt-0 text-black hover:bg-black hover:text-white"
      text="Withdraw">
      </TransactionButton> */}
      <StyledTransactionButton
        text="Withdraw">
      </StyledTransactionButton>
      <TransactionStatus>
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction>
  );
}
