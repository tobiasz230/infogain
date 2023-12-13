import { useState } from 'react';
import Section from './app/components/section/Section';
import CustomersList from './app/containers/cutomer/CustomersList';
import CustomerTransactions from './app/containers/transactions/CustomerTransactions';
import Box from './app/components/box/Box';
import Container from './app/components/container/Container';
import { CustomerTransactionsProvider } from './app/context/CustomerTransactionsContext';
import './App.css';

function App() {
  const [customer, setCustomer] = useState()
  
  const handleSelect = (customer) => {
    setCustomer(customer)
  }
  
  return (
    <CustomerTransactionsProvider>
      <Container>
            <Section subheader={'Customer transactions'}>
              <div style={{display: 'grid', gridTemplateColumns: '300px auto', gap: '16px', width: '100%'}}>
                <CustomersList onSelect={handleSelect} />
                <Box>
                {customer ? (
                  <CustomerTransactions customerId={customer.id} />
                ) : (
                  <span>Select a customer on the left to view their recent transactions</span>
                )}
              </Box>
            </div>
            </Section>
          </Container>
    </CustomerTransactionsProvider>
  );
}

export default App;
