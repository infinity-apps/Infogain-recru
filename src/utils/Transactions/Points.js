export const calculatePoints = (transactions, filter) => {
  const maxAmountWithoutPoints = 50;
  const maxAmountWithOnePoint = 100;

  return transactions.filter(filter).reduce((acc, { amount }) => {
    if (amount > maxAmountWithoutPoints && amount <= maxAmountWithOnePoint) {
      return acc + (amount - maxAmountWithoutPoints);
    } else if (amount > maxAmountWithOnePoint) {
      return (
        acc + maxAmountWithoutPoints + (amount - maxAmountWithOnePoint) * 2
      );
    }

    return acc;
  }, 0);
};
