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
import { Button } from '../ui/Button/Button';
import StyledTransactionButton from '../ui/Button/StyledTransactionButton';

type TransactionWrapperClaimProps = {
  address: Address;
  amount: string;
  seedTokenAddress: Address;
  stakeContractAddress: Address;
  seedAllowance: bigint;
  onSuccess: () => void;
  onError: (error: TransactionError) => void;
  chainId: number;
};

export default function TransactionWrapperClaim({
  address,
  amount,
  seedTokenAddress,
  stakeContractAddress,
  seedAllowance,
  onSuccess,
  onError,
  chainId,
}: TransactionWrapperClaimProps) {
  const [contracts, setContracts] = useState<ContractFunctionParameters[]>([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    // const cleanAmount = amount.replace(/,/g, '');
    // let parsedAmount: bigint;
    // try {
    //   parsedAmount = parseEther(cleanAmount);
    // } catch (error) {
    //   console.error('Error parsing amount:', error);
    //   return; // Exit early if parsing fails
    // }

    const newContracts: ContractFunctionParameters[] = [{
      address: stakeContractAddress,
      abi: stakeContractAbi,
      functionName: 'claimRewards',
      args: [],
    }];

    setContracts(newContracts);
  }, [address, stakeContractAddress]);

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
      chainId={chainId}
      onError={onError}
      onSuccess={handleSuccess}
      onStatus={handleStatus}
      capabilities={{
        paymasterService: {
          url: process.env.NEXT_PUBLIC_CDP_API_KEY!,
        },
      }}
    >
        {/* <TransactionButton className=" min-h-[48px] -mt-0 bg-black text-white"
          text="Claim">
        </TransactionButton> */}
      { !isPending && (
      <StyledTransactionButton
        text="Claim">
      </StyledTransactionButton>
      )}
      <TransactionStatus>
        <TransactionStatusLabel />
        <TransactionStatusAction />
      </TransactionStatus>
    </Transaction>
  );
}
