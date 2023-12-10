// import logo from "./logo.svg";
// import "./App.css";
import useTransactionsHistory from "./app/hooks/transaction/useTransactionsHistory";
import useRewardConfiguration from "./app/hooks/rewardProgram/useRewardConfiguarion";

function App() {
  const {transactionsHistory} = useTransactionsHistory();
  const {configuration} = useRewardConfiguration();

  return (
    <div>
      {transactionsHistory.length > 0 && (
        <ul>
          {transactionsHistory.map((t) => (
          <li key={t.transactionId}>
            <h6>{t.transactionId}</h6>
            
            <p>customer: {t.customerId}</p>
            <p>price: {t.price}</p>
            {!!configuration && (
              <span>points: {t.rewardPoints}</span>
            )}
            <div>{new Date(t.createdDate).toLocaleString()}</div>
          </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
