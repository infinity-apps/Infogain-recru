export const calculateTotalPrice = (transactions, filter) => {
  return transactions.filter(filter).reduce((acc, { amount }) => {
    return acc + amount;
  }, 0);
};
