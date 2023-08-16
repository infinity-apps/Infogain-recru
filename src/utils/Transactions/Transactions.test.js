import { countTransactions } from "./Transactions";

describe("countTransactions function test", () => {
  const transactions = [
    { client: 1, month: 0, amount: 40 },
    { client: 1, month: 0, amount: 50 },
    { client: 1, month: 0, amount: 90 },
    { client: 1, month: 0, amount: 100 },
    { client: 1, month: 0, amount: 150 },
    { client: 1, month: 0, amount: 200 },
  ];

  const filter = (transaction) =>
    transaction.client === 1 && transaction.month === 0;

  it("Counts matching transactions", () => {
    const count = countTransactions(transactions, filter);
    expect(count).toEqual(6);
  });

  it("Counts zero transactions for no matches", () => {
    const noMatchesTransactions = [
      { client: 2, month: 1, amount: 70 },
      { client: 2, month: 2, amount: 120 },
    ];

    const count = countTransactions(noMatchesTransactions, filter);
    expect(count).toEqual(0);
  });

  it("Counts zero transactions for empty transactions array", () => {
    const count = countTransactions([], filter);
    expect(count).toEqual(0);
  });
});
