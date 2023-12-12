import { useState } from 'react';
import './App.css';
import Section from './app/components/section/Section';
import CustomersList from './app/containers/cutomer/CustomersList';
import CustomerTransactions from './app/containers/transactions/CustomerTransactions';

function App() {
  const [customer, setCustomer] = useState()
  
  const handleSelect = (customer) => {
    setCustomer(customer)
  }
  
  return (
    <div style={{margin: '0 auto', maxWidth: '1200px', padding: '0 16px'}}>
      <Section subheader={'Customer transactions'}>
        <div style={{display: 'grid', gridTemplateColumns: '300px auto', gap: '16px'}}>
          <CustomersList onSelect={handleSelect} />
          <CustomerTransactions customerId={customer?.id} />
        </div>
      </Section>
    </div>
  );
}

export default App;
