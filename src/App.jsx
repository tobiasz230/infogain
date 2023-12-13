import { useState } from "react";
import CustomersList from "./app/containers/customer/CustomersList";
import CustomerTransactions from "./app/containers/transactions/CustomerTransactions";
import Box from "./_shared/ui/box/Box";
import Container from './_shared/ui/container/Container'
import { CustomerTransactionsProvider } from "./app/context/CustomerTransactionsContext";
import "./App.css";

function App() {
  const [customer, setCustomer] = useState();

  const handleSelect = (customer) => {
    setCustomer(customer);
  };

  return (
    <CustomerTransactionsProvider>
      <Container>
        <div className="app">
          <h1>Customers reward program</h1>
          <div className="app__grid">
            <CustomersList onSelect={handleSelect} />
            <Box>
              {customer ? (
                <CustomerTransactions customerId={customer.id} />
              ) : (
                <span>
                  Select a customer on the left to view their recent
                  transactions
                </span>
              )}
            </Box>
          </div>
        </div>
      </Container>
    </CustomerTransactionsProvider>
  );
}

export default App;
