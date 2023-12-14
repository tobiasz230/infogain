import { useContext, useMemo } from "react";
import useCustomerTransations from "../hooks/useCustomerTransactions";
import Section from "../../../../_shared/components/section/Section";
import TransactionsTable from "../components/transactionsTable/TransactionsTable";
import { getTransactionsMonthly } from "../utils";
import { CustomerTransactionsContext } from "../context/CustomerTransactionsContext";

const CustomerTransactions = () => {
  const { customer } = useContext(CustomerTransactionsContext);
  const { transactions, isLoading } = useCustomerTransations();

  const transactionsByMonth = useMemo(
    () => !!transactions && getTransactionsMonthly(transactions),
    [transactions],
  );

  const allPoints = useMemo(
    () =>
      Object.keys(transactionsByMonth).reduce(
        (acc, key) => (acc += transactionsByMonth[key].totalPoints),
        0,
      ),
    [transactionsByMonth],
  );

  if (!customer && !isLoading)
    return (
      <Section subheader={"Customer transactions"}>
        <span>
          Select a customer on the left to view their recent transactions
        </span>
      </Section>
    );

  if (isLoading)
    return (
      <Section
        subheader={"Customer transactions"}
        subheaderEnd={<span>loading....</span>}
      ></Section>
    );

  if (!!transactions && !transactions.length)
    return (
      <Section subheader={"Customer transactions"}>
        <span>The customer has not made any transaction</span>
      </Section>
    );

  return (
    <Section
      subheader={"Customer transactions"}
      subheaderEnd={
        <span>
          all points: <strong>{allPoints}</strong>
        </span>
      }
    >
      {Object.keys(transactionsByMonth).map((month) => (
        <TransactionsTable
          key={month}
          {...transactionsByMonth[month]}
          month={month}
          currency={transactionsByMonth[month].currency.symbol}
        />
      ))}
    </Section>
  );
};

export default CustomerTransactions;
