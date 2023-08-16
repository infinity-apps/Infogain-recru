import React, { useState } from "react";
import { useSelector } from "react-redux";

import InfoBox from "components/InfoBox";

import styles from "./Transactions.module.scss";

const Transactions = () => {
  const { transactions, error: transactionsError } = useSelector(
    ({ transactions }) => transactions,
  );
  const [sorting, setSorting] = useState(["month", "asc"]);
  const [sortedTransactions, setSortedTransactions] = useState(transactions);

  const onChangeSorting = (key) => {
    if (sorting[0] === key) {
      if (sorting[1] === "asc") {
        setSorting([key, "desc"]);
        setSortedTransactions(transactions.sort((a, b) => b[key] - a[key]));
        return;
      }
    }

    setSorting([key, "asc"]);
    setSortedTransactions(transactions.sort((a, b) => a[key] - b[key]));
  };

  if (!transactions || transactionsError) {
    return null;
  }

  return (
    <>
      <InfoBox message={"Click on a head to change sorting."} />
      <table width="100%" className={styles.table}>
        <thead>
          <tr>
            {sortedTransactions[0] &&
              Object.keys(sortedTransactions[0]).map((key) => (
                <th key={key} onClick={() => onChangeSorting(key)}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}{" "}
                  {sorting[0] === key && (sorting[1] === "asc" ? "⬆" : "⬇")}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map(({ client, month, amount }, i) => (
            <tr key={`client-${client}--month-${month}--${i}`}>
              <td>{client}</td>
              <td>{month}</td>
              <td>{amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Transactions;
