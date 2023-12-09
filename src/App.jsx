import logo from "./logo.svg";
import "./App.css";
import useTransactionsHistory from "./app/hooks/transaction/useTransactionsHistory";
import useRewardConfiguration from "./app/hooks/rewardProgram/useRewardConfiguarion";
import { getRewardPointsByTransaction } from "./_shared/utils/_rewardPointCounter";

function App() {
  const {transactionsHistory} = useTransactionsHistory();
  const {configuration} = useRewardConfiguration();
  console.log('CONFIG', configuration)


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {transactionsHistory.length > 0 && (
        <ul>
          {transactionsHistory.map((t) => (
          <li key={t.transactionId}>
            <h6>{t.transactionId}</h6>
            <p>price: {t.price}</p>
            {!!configuration && (
              <span>points: {getRewardPointsByTransaction(t.price, configuration.basePointValue, configuration.pointRanges)}</span>
            )}
          </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
