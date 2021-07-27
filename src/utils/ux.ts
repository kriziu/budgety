export const getMoneyColor = (amount: number): 'red' | 'green' | 'black' => {
  if (amount > 0) return 'green';
  else if (amount < 0) return 'red';
  return 'black';
};
