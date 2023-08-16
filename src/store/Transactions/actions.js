import {
  TRANSACTIONS_REQUEST,
  TRANSACTIONS_UPDATE,
  TRANSACTIONS_ERROR,
} from "./types";
import { transactionsRequest } from "api";

export const transactionsAction = (dispatch, payload = null) => {
  dispatch({ type: TRANSACTIONS_REQUEST });

  return transactionsRequest(
    payload,
    async (res) => {
      dispatch({
        type: TRANSACTIONS_UPDATE,
        payload: {
          transactions: res,
        },
      });
    },
    (error) => {
      dispatch({
        type: TRANSACTIONS_ERROR,
        error,
      });
    },
  );
};
