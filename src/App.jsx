import logo from "./logo.svg";
import "./App.css";
import {default as useTransactionsHistory} from "./app/hooks/transaction/useTransactionsHistory";

function App() {
  const {transactionsHistory} = useTransactionsHistory();

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
            <span>{t.price}</span>
          </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
