// utils.test.js
import { calculatePoints } from "./Points";

describe("calculatePoints function test", () => {
  const transactions = [
    { client: 0, month: 1, amount: 49 }, // 0 points
    { client: 0, month: 1, amount: 50 }, // 0 points
    { client: 0, month: 1, amount: 51 }, // 1 point
    { client: 0, month: 1, amount: 99 }, // 49 points
    { client: 0, month: 1, amount: 100 }, // 50 points
    { client: 0, month: 1, amount: 101 }, // 52 points
    { client: 0, month: 1, amount: 120 }, // 90 points
    { client: 0, month: 1, amount: 200 }, // 250 points
  ];

  const filter = (transaction) =>
    transaction.client === 0 && transaction.month === 1;

  it("Calculates points for all transactions", () => {
    const points = calculatePoints(transactions, filter);
    expect(points).toEqual(492);
  });

  it("Calculates zero points for transactions below maxAmountWithoutPoints", () => {
    const zeroPointsTransactions = [
      { client: 0, month: 1, amount: 40 }, // 0 points
      { client: 0, month: 1, amount: 49 }, // 0 points
    ];

    const points = calculatePoints(zeroPointsTransactions, filter);
    expect(points).toEqual(0);
  });

  it("Calculates points only for transactions above maxAmountWithoutPoints", () => {
    const onePointTransactions = [
      { client: 0, month: 1, amount: 60 }, // 10 points
      { client: 0, month: 1, amount: 70 }, // 20 points
    ];

    const points = calculatePoints(onePointTransactions, filter);
    expect(points).toEqual(30);
  });

  it("Calculates double points for transactions above maxAmountWithOnePoint", () => {
    const twoPointsTransactions = [
      { client: 0, month: 1, amount: 110 }, // 70 points
      { client: 0, month: 1, amount: 120 }, // 90 points
    ];

    const points = calculatePoints(twoPointsTransactions, filter);
    expect(points).toEqual(160);
  });

  it("Calculates zero points for no transactions", () => {
    const points = calculatePoints([], filter);
    expect(points).toEqual(0);
  });
});
