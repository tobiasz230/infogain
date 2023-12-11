import Avatar from "./app/components/avatar/Avatar";
import useCustomers from "./app/hooks/customer/useCustomers";
import { Fragment, useState } from "react";
import List from "./app/components/list/List";
import ListItemStart from "./app/components/list-item/list-item-start/ListItemStart";
import ListItemButton from "./app/components/list-item/list-item-button/ListItemButton";
import './App.css';
import ListItemText from "./app/components/list-item/list-item-text/ListItemText";

function App() {
  const {customers} = useCustomers();
  const [selected, setSelected] = useState('')

  const handleClick = (id) => {
    setSelected(id)
  } 

  return (
    <div style={{margin: '0 auto', maxWidth: '1200px', padding: '0 16px'}}>
      <div style={{display: "flex"}}>
          <div style={{width: '30%'}}>
            {customers.length > 0 && (
              <Fragment>
                <div style={{display: 'flex', justifyContent: 'space-between', paddingBottom: '8px', marginBottom: '24px', borderBottom: '2px solid #85d763'}}>
                    <strong>Customers</strong><span>total: {customers.length}</span>
                </div>
                <List>
                {customers.map((c) => (
                  <ListItemButton key={c.id} onClick={() => handleClick(c.id)} selected={selected === c.id}>
                    <ListItemStart> 
                      <Avatar imageUrl={c.avatar} size={56} alt={c.fullName}/>
                    </ListItemStart>
                    <ListItemText text={c.fullName}>
                      <small>{c.company}</small>
                    </ListItemText>
                  </ListItemButton>
                  ))}
                </List>
              </Fragment>
            )}
        </div>
        <div style={{width: '70%', padding: '0 16px'}}>content</div>
      </div>
    </div>
  );
}

export default App;
