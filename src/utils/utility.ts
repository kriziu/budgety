import React from 'react';
import { TransactionType } from '../store/transactions/types';

// PROTOTYPES
declare global {
  interface Date {
    getFancyDate(): string;
    getFancyHours(): string;
  }
}

// eslint-disable-next-line no-extend-native
Date.prototype.getFancyDate = function (): string {
  let day = this.getDate().toString();
  let month = (this.getMonth() + 1).toString();

  if (parseInt(day) < 10) day = `0${day}`;
  if (parseInt(month) < 10) month = `0${month}`;

  return `${day}/${month}/${this.getFullYear()}`;
};

// eslint-disable-next-line no-extend-native
Date.prototype.getFancyHours = function (): string {
  let hours = this.getHours().toString();
  let minutes = this.getMinutes().toString();

  if (parseInt(minutes) < 10) minutes = `0${minutes}`;
  if (parseInt(hours) < 10) hours = `0${hours}`;

  return `${hours}:${minutes}`;
};

export const handleEnterPressed = (
  e: React.KeyboardEvent,
  action: (e: React.SyntheticEvent) => void
): void => {
  if (e.key === 'Enter') action(e);
};

export const timeout = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

export const getMultiplier = (
  transaction: TransactionType,
  monthly: boolean = false
): number => {
  const hour = 1000 * 60 * 60 * transaction.repeat.every;
  const now = new Date();
  const nowDate = now.getTime();
  const transactionDate = monthly
    ? new Date(now.getFullYear(), now.getMonth(), 1).getTime()
    : new Date(transaction.date).getTime();
  let multiplier = 1;

  if (!transaction.repeat.repeat) return 1;

  switch (transaction.repeat.type) {
    case 'hours':
      multiplier = Math.floor((nowDate - transactionDate) / hour);
      break;
    case 'days':
      multiplier = Math.floor((nowDate - transactionDate) / (hour * 24));
      break;
    case 'month':
      multiplier = Math.floor((nowDate - transactionDate) / (hour * 24 * 31));
      break;
    case 'year':
      multiplier = Math.floor((nowDate - transactionDate) / (hour * 24 * 365));
      break;
    default:
      multiplier = 1;
  }

  return multiplier;
};
