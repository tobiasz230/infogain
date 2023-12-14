import "./TransactionsTable.css";

const TransactionsTable = ({
  transactions,
  month,
  totalPoints,
  totalSum,
  currency,
}) => (
  <table className="transaction-table">
    <thead>
      <tr>
        <th align="center" colSpan={3}>
          {month}
        </th>
      </tr>
      <tr>
        <th align="left">Transaction</th>
        <th align="right">Price ({currency})</th>
        <th align="right">Points</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map((t) => (
        <tr key={t.transactionId}>
          <td>
            <strong>{t.transactionId}</strong>
            <br />
            <small>{t.createdDate}</small>
          </td>
          <td align="right">{t.price}</td>
          <td align="right">{t.rewardPoints}</td>
        </tr>
      ))}
    </tbody>
    <tfoot>
      <tr>
        <td colSpan={2} align="right">
          <strong>{totalSum}</strong>
        </td>
        <td colSpan={1} align="right">
          <strong>{totalPoints}</strong>
        </td>
      </tr>
    </tfoot>
  </table>
);

export default TransactionsTable;
