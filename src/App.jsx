import CustomersList from "./app/features/customerTransactions/containers/CustomersList";
import CustomerTransactions from "./app/features/customerTransactions/containers/CustomerTransactions";
import Box from "./_shared/components/box/Box";
import Container from "./_shared/components/container/Container";
import { CustomerTransactionsProvider } from "./app/features/customerTransactions/context/CustomerTransactionsContext";
import "./App.css";

function App() {
  return (
    <CustomerTransactionsProvider>
      <Container>
        <div className="app">
          <h1>Customers reward program</h1>
          <div className="app__grid">
            <CustomersList />
            <Box>
              <CustomerTransactions />
            </Box>
          </div>
        </div>
      </Container>
    </CustomerTransactionsProvider>
  );
}

export default App;
