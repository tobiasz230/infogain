import useCustomerTransations from "../../hooks/transaction/useCustomerTransactions";

const CustomerTransactions = ({customerId}) => {
    const {transactions} = useCustomerTransations(customerId)

    if(!transactions.length) return <span>The customer has not made any transaction</span>

    const transactionsByMonth = transactions.reduce((acc, transaction) => {
        const date = new Date(transaction.createdDate);
        const key = date.toLocaleString(document.documentElement.lang, {month:'long', year:'numeric'});
        const formattedDate = date.toLocaleString(document.documentElement.lang);

        if (!acc[key]) acc[key] = {transactions: [], sum: 0, currency: transaction.currency, totalPoints: 0}
        

        acc[key].transactions = [...acc[key].transactions, {...transaction, createdDate: formattedDate}];
        acc[key].totalPoints += transaction.rewardPoints;
        acc[key].sum += transaction.price;

        return acc;
    }, {})

    return (
        Object.keys(transactionsByMonth).map((month) => (
            <div key={month}>
                <table style={{width: '100%'}}>
                    <thead>
                        <tr>
                            <th align="center" colSpan={3}>
                                {month}
                            </th>
                        </tr>
                        <tr>
                            <th align="left">Transaction</th>
                            <th align="right">Price</th>
                            <th align="right">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionsByMonth[month].transactions.map(t => (
                            <tr key={t.transactionId}>
                                <td>
                                    <strong>{t.transactionId}</strong><br/>
                                    <small>{t.createdDate}</small>
                                </td>
                                <td align="right">{t.price}{t.currency.symbol}</td>
                                <td align="right">{t.rewardPoints}</td>
                            </tr>
                        ))}
                        <tr>
                            <td colSpan={2} align="right">
                                <strong>{transactionsByMonth[month].sum} {transactionsByMonth[month].currency.symbol}</strong>
                            </td>
                            <td colSpan={1} align="right">
                                <strong>{transactionsByMonth[month].totalPoints}</strong>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        ))
    )
}

export default CustomerTransactions;