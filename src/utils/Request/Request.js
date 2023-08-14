export const request = async (
    endpoint,
    payload = null,
    successCallback = () => {},
    errorCallback = () => {},
    callback = () => {}
) => {
    const { REACT_APP_API_SECURE: isSecure, REACT_APP_API_URL: apiUrl, REACT_APP_API_PORT: apiPort } = process.env;

    let url = isSecure ? 'http://' : 'https://';
        url += apiUrl;
        url += apiPort && `:${apiPort}`;
        url += `/${endpoint}`;

    return await fetch(url, {
        method: 'GET',
        body: payload,
    })
        .then(async (res) => {
            const jsonRes = await res.json();

            callback();

            if (res.ok) {
                return jsonRes;
            } else {
                throw jsonRes;
            }
        })
        .then((res) => successCallback(res))
        .catch((err) => errorCallback(err));
};