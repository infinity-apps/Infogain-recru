import {request} from "utils/Request";

const transactions = (successCallback, errorCallback) => {
    return request(
        'transactions',
        null,
        async (res) => {
            successCallback(res);
        },
        (err) => {
            errorCallback(err);
        },
    );
};

export default transactions;