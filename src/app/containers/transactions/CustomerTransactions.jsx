import useCustomerTransations from "../../hooks/transaction/useCustomerTransactions";
import Section from "../../components/section/Section";
import TransactionsTable from "../../components/transactionsTable/TransactionsTable";

const CustomerTransactions = ({customerId}) => {
    const {transactions} = useCustomerTransations(customerId)

    if(!transactions.length) return <span>The customer has not made any transaction</span>

    const transactionsByMonth = transactions.reduce((acc, transaction) => {
        const date = new Date(transaction.createdDate);
        const key = date.toLocaleString(document.documentElement.lang, {month:'long', year:'numeric'});
        const formattedDate = date.toLocaleString(document.documentElement.lang);

        if (!acc[key]) acc[key] = {transactions: [], totalSum: 0, currency: transaction.currency, totalPoints: 0}
        

        acc[key].transactions = [...acc[key].transactions, {...transaction, createdDate: formattedDate}];
        acc[key].totalPoints += transaction.rewardPoints;
        acc[key].totalSum += transaction.price;

        return acc;
    }, {});

    const allPoints = Object.keys(transactionsByMonth).reduce((acc, key) => acc += transactionsByMonth[key].totalPoints, 0);

    return (
        <Section subheader={'Customer points'} subheaderEnd={<span>all points: <strong>{allPoints}</strong></span>}>
            {Object.keys(transactionsByMonth).map((month) => (
                    <TransactionsTable 
                        key={month} 
                        {...transactionsByMonth[month]}
                        month={month}
                        currency={transactionsByMonth[month].currency.symbol}
                    />
                )
            )}
        </Section>
    )
}

export default CustomerTransactions;