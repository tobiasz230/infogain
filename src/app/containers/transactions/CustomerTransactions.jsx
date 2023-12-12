import useCustomerTransations from "../../hooks/transaction/useCustomerTransactions";

const CustomerTransactions = ({customerId}) => {
    const {transactions} = useCustomerTransations(customerId)
    console.log('transactions', transactions);

    return (
        <span 
            subheader={'Customer transaction'} 
        >
            example content
        </span>
    )
}

export default CustomerTransactions;