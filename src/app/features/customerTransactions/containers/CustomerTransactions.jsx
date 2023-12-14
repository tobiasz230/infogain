import { useMemo } from "react";
import useCustomerTransations from "../hooks/useCustomerTransactions";
import Section from "../../../../_shared/components/section/Section";
import TransactionsTable from "../components/transactionsTable/TransactionsTable";
import { getTransactionsMonthly } from "../../../../_shared/utils";

const CustomerTransactions = ({ customerId }) => {
  const { transactions, isLoading } = useCustomerTransations(customerId);

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

  if (isLoading) return <span>loading....</span>;

  if (!!transactions && !transactions.length) return <span>The customer has not made any transaction</span>;

  return (
    <Section
      subheader={"Customer points"}
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
