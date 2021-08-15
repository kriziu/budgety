import React from 'react';

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
  action: () => void
): void => {
  if (e.key === 'Enter') action();
};
