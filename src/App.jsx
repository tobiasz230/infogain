// import logo from "./logo.svg";
// import "./App.css";
import useTransactionsHistory from "./app/hooks/transaction/useTransactionsHistory";
import useRewardConfiguration from "./app/hooks/rewardProgram/useRewardConfiguarion";
import useCustomers from "./app/hooks/castomer/useCustomers";

function App() {
  const {transactionsHistory} = useTransactionsHistory();
  // const {configuration} = useRewardConfiguration();
  const {customers} = useCustomers();
  console.log('customers', customers)

  return (
    <div>
      {customers.length > 0 && (
        <ul>
          {customers.map((c) => (
          <li key={c.id} style={{listStyle: 'none', marginBottom: '8px'}}>
            <div style={{display:"flex"}}>
              <span style={{display: 'inline-block', width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', boxShadow: '-1px 2px 6px 0px grey', marginRight: '8px'}}>
                <img style={{width: '100%'}} src={c.avatar} alt="" />
                </span>
              <div>
                <strong>{`${c.firstName} ${c.lastName}`}</strong><br/>
                <span>{c.id}</span>
              </div>
            </div>
          </li>
          ))}
        </ul>
      )}
      {transactionsHistory.length > 0 && (
        <ul>
          {transactionsHistory.map((t) => (
          <li key={t.transactionId}>
            <h6>{t.transactionId}</h6>
            
            <p>customer: {t.customerId}</p>
            <p>price: {t.price}</p>
            <span>points: {t.rewardPoints}</span>
            <div>{new Date(t.createdDate).toLocaleString()}</div>
          </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
