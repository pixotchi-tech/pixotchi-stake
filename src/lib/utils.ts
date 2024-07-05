import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import * as dn from "dnum";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatBalanceWithTwoDecimals = (balance: bigint | undefined) => {
  if (!balance) return '0.00';
  const dnumBalance = [balance, 18] as dn.Dnum;
  const formatted = dn.format(dnumBalance, { 
    digits: 2, 
    decimalsRounding: "ROUND_DOWN",
  });
  
  const [integerPart, decimalPart = '00'] = formatted.split('.');
  const formattedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
  return `${formattedIntegerPart}.${decimalPart.padEnd(2, '0')}`;
};

export const parseBalanceToNumber = (formattedBalance: string): number => {
  return Number(formattedBalance.replace(/,/g, ''));
};

export const parseBalanceToBigInt = (formattedBalance: string): bigint => {
  const cleanedBalance = formattedBalance.replace(/,/g, '');
  const [integerPart, decimalPart = ''] = cleanedBalance.split('.');
  const paddedDecimal = decimalPart.padEnd(18, '0');
  return BigInt(integerPart + paddedDecimal);
};