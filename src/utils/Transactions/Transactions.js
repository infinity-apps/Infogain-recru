export const countTransactions = (transactions, filter) => {
  return transactions.filter(filter).length;
};
