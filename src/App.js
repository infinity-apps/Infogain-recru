import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Routes from "routes";
import { transactionsAction } from "store";
import Loader from "components/Loader";
import Header from "components/Header";
import InfoBox from "components/InfoBox";

import styles from "./App.module.scss";
import "./App.scss";

const App = () => {
  const dispatch = useDispatch();

  const { isLoading: areTransactionsLoading, error: transactionsError } =
    useSelector(({ transactions }) => transactions);

  useEffect(() => {
    transactionsAction(dispatch);
  }, [dispatch]);

  return (
    <>
      <Header />
      <main>
        <div className={styles.wrapper}>
          {areTransactionsLoading ? <Loader /> : <Routes />}
          {transactionsError && (
            <InfoBox type="error" message={transactionsError} />
          )}
        </div>
      </main>
    </>
  );
};

export default App;
