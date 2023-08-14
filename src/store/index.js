import { configureStore } from '@reduxjs/toolkit';

import { default as transactions } from './Transactions/reducers';
import { transactionsAction } from './Transactions/actions';

const store = configureStore({
    reducer: {
        transactions
    }
});

export {
    transactionsAction
};
export default store;