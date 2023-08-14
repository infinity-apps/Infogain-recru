import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {transactionsAction} from 'store';

const Home = () => {
    const dispatch = useDispatch();
    const transactions = useSelector(({ transactions }) => transactions.transactions);

    useEffect(() => {
        transactionsAction(dispatch);
    }, [dispatch]);

    const uniqClients = [...new Set(transactions.map(e => e.client))].sort();
    const uniqMonths = [...new Set(transactions.map(e => e.month))].sort();

    return (
        <>
            <table width="100%">
                <thead>
                    <tr>
                        <th></th>
                        {uniqMonths.map((e) => (
                            <th>Month {e}</th>
                        ))}
                        <th>TOTAL</th>
                    </tr>
                </thead>
                <tbody>
                {uniqClients.map((clientId) => (
                    <tr style={{textAlign: 'center'}}>
                        <td><b>Client #{clientId}</b></td>
                        {uniqMonths.map((currentMonth) => (
                            <td>
                                {
                                    transactions.filter(({ client, month }) => client === clientId && month === currentMonth).reduce((acc, { amount }) => {
                                        if (amount > 50 && amount < 100) {
                                            return acc + (amount - 50);
                                        } else if (amount > 100) {
                                            return acc + (50 + (amount - 100) * 2);
                                        }

                                        return acc;
                                    }, 0)
                                } points
                                <br />
                                (
                                ${
                                    transactions.filter(({ client, month }) => client === clientId && month === currentMonth).reduce((acc, { amount }) => {
                                        return acc + amount;
                                    }, 0)
                                } in {transactions.filter(({ client, month }) => client === clientId && month === currentMonth).length} transactions
                                )
                            </td>
                        ))}
                        <td>
                            {
                                transactions.filter(({ client }) => client === clientId).reduce((acc, { amount }) => {
                                    if (amount > 50 && amount < 100) {
                                        return acc + (amount - 50);
                                    } else if (amount > 100) {
                                        return acc + (50 + (amount - 100) * 2);
                                    }

                                    return acc;
                                }, 0)
                            } points in {transactions.filter(({ client }) => client === clientId).length} transactions
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    );
};

export default Home;