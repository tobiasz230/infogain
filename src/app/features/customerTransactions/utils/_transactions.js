export const getTransactionsMonthly = (transactions) =>
  transactions.reduce((acc, transaction) => {
    const date = new Date(transaction.createdDate);
    const key = date.toLocaleString("en", {
      month: "long",
      year: "numeric",
    });
    const formattedDate = date.toLocaleString("en");

    if (!acc[key])
      acc[key] = {
        transactions: [],
        totalSum: 0,
        currency: transaction.currency,
        totalPoints: 0,
      };

    acc[key].transactions = [
      ...acc[key].transactions,
      { ...transaction, createdDate: formattedDate },
    ];
    acc[key].totalPoints += transaction.rewardPoints;
    acc[key].totalSum += transaction.price;

    return acc;
  }, {});
