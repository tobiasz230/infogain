import useCustomerTransations from "../../hooks/transaction/useCustomerTransactions";

const CustomerTransactions = ({customerId}) => {
    const {transactions} = useCustomerTransations(customerId)

    if(!transactions.length) return <span>The customer has not made any transaction</span>

    const transactionsByMonth = transactions.reduce((acc, transaction) => {
        const {createdDate} = transaction;
        const date = new Date(createdDate);
        const key = date.toLocaleString(document.documentElement.lang, {month:'long', year:'numeric'});
        const formattedDate = date.toLocaleString(document.documentElement.lang);

        if (!acc[key]) acc[key] = []
        acc[key] = [...acc[key], {...transaction, createdDate: formattedDate}]

        return acc;
    }, {})

    return (
        Object.keys(transactionsByMonth).map((month) => (
            <div key={month}>
                <h3>{month}</h3>
                <table style={{width: '100%'}}>
                    <thead>
                        <tr>
                            <th align="left">Transaction</th>
                            <th align="right">Price</th>
                            <th align="right">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactionsByMonth[month].map(t => (
                            <tr key={t.transactionId}>
                                <td>
                                    {t.transactionId} <br/>
                                    <small>{t.createdDate}</small>
                                </td>
                                <td align="right">{t.price}{t.currency.symbol}</td>
                                <td align="right">{t.rewardPoints}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ))
    )
}

export default CustomerTransactions;