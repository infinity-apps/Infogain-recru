module.exports = () => {
    const data = { transactions: [] };

    for (let i = 0; i < 100; i++) {
        const randomClientId = Math.floor(Math.random() * 10); // 0 to 10
        const randomMonth = Math.floor(Math.random() * 3) + 1; // 1 to 3
        const randomAmount = Math.floor(Math.random() * 200) + 1; // 1 to 200

        data.transactions.push({ client: randomClientId, month: randomMonth, amount: randomAmount})
    }

    data.transactions.sort((a, b) => a.month - b.month);

    return data;
}