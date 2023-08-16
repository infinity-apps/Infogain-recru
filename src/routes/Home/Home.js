import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  countTransactions,
  calculatePoints,
  calculateTotalPrice,
} from "utils/Transactions";
import InfoBox from "components/InfoBox";

import styles from "./Home.module.scss";

const Home = () => {
  const { transactions, error: transactionsError } = useSelector(
    ({ transactions }) => transactions,
  );
  const [detailedTransactions, setDetailedTransactions] = useState([]);

  const uniqClients = [...new Set(transactions.map((e) => e.client))].sort();
  const uniqMonths = [...new Set(transactions.map((e) => e.month))].sort();

  const onClickClientRow = (clientId) => {
    if (detailedTransactions.includes(clientId)) {
      setDetailedTransactions((prevState) =>
        prevState.filter((e) => e !== clientId),
      );
    } else {
      setDetailedTransactions((prevState) => [...prevState, clientId]);
    }
  };

  const renderClientDetailedTransactions = (clientId) => {
    if (detailedTransactions.includes(clientId)) {
      return (
        <tr className={styles["row-details"]}>
          <td></td>
          {uniqMonths.map((currentMonth) => (
            <td key={`client-${clientId}--month-${currentMonth}--details`}>
              {transactions
                .filter(
                  ({ client, month }) =>
                    client === clientId && month === currentMonth,
                )
                .map(({ amount }, i) => (
                  <p
                    key={`client-${clientId}--month-${currentMonth}--details--${i}`}
                  >
                    {i + 1}. ${amount}
                  </p>
                ))}
            </td>
          ))}
          <td>
            Total amount spent: $
            {calculateTotalPrice(
              transactions,
              ({ client }) => client === clientId,
            )}
          </td>
        </tr>
      );
    }

    return null;
  };

  if (!transactions || transactionsError) {
    return null;
  }

  return (
    <>
      <InfoBox message={"Click on a row to see details."} />
      <table width="100%" className={styles.table}>
        <thead>
          <tr>
            <th></th>
            {uniqMonths.map((currentMonth) => (
              <th key={`month-${currentMonth}`}>Month {currentMonth}</th>
            ))}
            <th>TOTAL</th>
          </tr>
        </thead>
        <tbody>
          {uniqClients.map((clientId) => (
            <React.Fragment key={`client-${clientId}`}>
              <tr
                onClick={() => onClickClientRow(clientId)}
                className={styles.row}
              >
                <td>
                  <b>
                    <span>Client</span> #{clientId}
                  </b>
                </td>
                {uniqMonths.map((currentMonth) => (
                  <td key={`client-${clientId}--month-${currentMonth}`}>
                    {calculatePoints(
                      transactions,
                      ({ client, month }) =>
                        client === clientId && month === currentMonth,
                    )}{" "}
                    points
                  </td>
                ))}
                <td>
                  {calculatePoints(
                    transactions,
                    ({ client }) => client === clientId,
                  )}{" "}
                  points in{" "}
                  {countTransactions(
                    transactions,
                    ({ client }) => client === clientId,
                  )}{" "}
                  transactions
                </td>
              </tr>
              {renderClientDetailedTransactions(clientId)}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
