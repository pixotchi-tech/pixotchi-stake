import React, { useState, useEffect } from 'react';
import {
  Transaction,
  TransactionButton,
  TransactionStatus,
  TransactionStatusAction,
  TransactionStatusLabel,
} from '@coinbase/onchainkit/transaction';
import type {
  LifeCycleStatus,
  TransactionError,
  TransactionResponse,
} from '@coinbase/onchainkit/transaction';
import type { Address, ContractFunctionParameters } from 'viem';
import { parseEther } from 'viem';
import { erc20Abi, stakeContractAbi, stakeContractConfig } from '@/generated';
import { Button } from '../ui';
import StyledTransactionButton from '../ui/Button/StyledTransactionButton';

type TransactionWrapperStakeProps = {
  address: Address;
  amount: string;
  seedTokenAddress: Address;
  stakeContractAddress: Address;
  seedAllowance: bigint;
  onSuccess: () => void;
  onError: (error: TransactionError) => void;
  chainId: number;
};

export default function TransactionWrapperStake({
  address,
  amount,
  seedTokenAddress,
  stakeContractAddress,
  seedAllowance,
  onSuccess,
  onError,
  chainId
}: TransactionWrapperStakeProps) {
  const [contracts, setContracts] = useState<ContractFunctionParameters[]>([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const cleanAmount = amount.replace(/,/g, '');
    let parsedAmount: bigint;
    try {
      parsedAmount = parseEther(cleanAmount);
    } catch (error) {
      console.error('Error parsing amount:', error);
      return; // Exit early if parsing fails
    }

    const newContracts: ContractFunctionParameters[] = [];

    if (seedAllowance < parsedAmount) {
      newContracts.push({
        address: seedTokenAddress,
        abi: erc20Abi,
        functionName: 'approve',
        args: [stakeContractAddress, parsedAmount],
      });
    }

    newContracts.push({
      address: stakeContractAddress,
      abi: stakeContractAbi,
      functionName: 'stake',
      args: [parsedAmount],
    });

    setContracts(newContracts);
  }, [address, amount, seedTokenAddress, stakeContractAddress, seedAllowance]);

  const handleSuccess = (response: TransactionResponse) => {
    console.log('Transaction successful', response);
    onSuccess();
  };

  const handleStatus = (lifeCycleStatus: LifeCycleStatus) => {
    console.log('Transaction status:', lifeCycleStatus);
    setIsPending(lifeCycleStatus.statusName === "transactionPending");
  };

  return (
    <Transaction
      address={address}
      contracts={contracts}
      onError={onError}
      onSuccess={handleSuccess}
      onStatus={handleStatus}
      capabilities={{
        paymasterService: {
          url: process.env.NEXT_PUBLIC_CDP_API_KEY!,
        },
      }}
      chainId={chainId}
    >
      { !isPending && (
      <StyledTransactionButton
        text="Stake">
      </StyledTransactionButton>
      )}
      {/* <TransactionButton
        className={"nesui-rounded-border relative border-solid border-4  bg-border text-primary-foreground hover:bg-accent "}
        text="Stake">
      </TransactionButton> */}
      <TransactionStatus>
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction>

  );
}
