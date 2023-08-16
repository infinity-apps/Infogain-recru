import { request } from "utils/Request";

const transactions = (payload, successCallback, errorCallback) => {
  return request(
    "transactions",
    payload,
    async (res) => {
      successCallback(res);
    },
    (err) => {
      errorCallback(err);
    },
    () => {},
  );
};

export default transactions;
