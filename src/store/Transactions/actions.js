import {TRANSACTIONS_REQUEST, TRANSACTIONS_UPDATE, TRANSACTIONS_ERROR} from "./types";
import {transactionsRequest} from "api";

export const transactionsAction = (dispatch) => {
    dispatch({ type: TRANSACTIONS_REQUEST });

    return transactionsRequest(
        async (res) => {
            dispatch({
                type: TRANSACTIONS_UPDATE,
                payload: {
                    transactions: res
                },
            });
        },
        (err) => {
            dispatch({
                type: TRANSACTIONS_ERROR,
                err,
            });
        }
    );
};
