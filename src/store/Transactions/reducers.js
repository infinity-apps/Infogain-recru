import { TRANSACTIONS_REQUEST, TRANSACTIONS_UPDATE, TRANSACTIONS_ERROR } from './types';

export const initialState = {
    transactions: [],
};

const transactionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TRANSACTIONS_REQUEST:
            return { ...state };
        case TRANSACTIONS_UPDATE:
            const { transactions } = action.payload;
            return { ...state, transactions };
        case TRANSACTIONS_ERROR:
            return { ...state, transactions: [] };
        default:
            return state;
    }
};

export default transactionsReducer;
