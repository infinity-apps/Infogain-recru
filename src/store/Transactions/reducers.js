import {
  TRANSACTIONS_REQUEST,
  TRANSACTIONS_UPDATE,
  TRANSACTIONS_ERROR,
} from "./types";

export const initialState = {
  transactions: [],
  isLoading: false,
  error: null,
};

const transactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TRANSACTIONS_REQUEST:
      return { ...state, isLoading: true, error: false };
    case TRANSACTIONS_UPDATE:
      const { transactions } = action.payload;

      return { ...state, transactions, isLoading: false };
    case TRANSACTIONS_ERROR:
      const { error } = action;

      return {
        ...state,
        transactions: [],
        isLoading: false,
        error,
      };
    default:
      return state;
  }
};

export default transactionsReducer;
