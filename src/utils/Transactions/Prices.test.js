import { calculateTotalPrice } from "./Prices";

describe("calculateTotalPrice function test", () => {
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

  it("Calculates total price for transactions", () => {
    const totalPrice = calculateTotalPrice(transactions, filter);
    expect(totalPrice).toEqual(630);
  });

  it("Calculates zero total price for no transactions", () => {
    const totalPrice = calculateTotalPrice([], filter);
    expect(totalPrice).toEqual(0);
  });
});
