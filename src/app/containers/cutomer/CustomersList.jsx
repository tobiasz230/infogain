import { useState } from "react";
import useCustomers from "../../hooks/customer/useCustomers";
import List from "../../components/list/List";
import ListItemButton from "../../components/list-item/list-item-button/ListItemButton";
import ListItemStart from "../../components/list-item/list-item-start/ListItemStart";
import ListItemText from "../../components/list-item/list-item-text/ListItemText";
import Avatar from "../../components/avatar/Avatar";

const CustomersList = ({onSelect}) => {
  const {customers} = useCustomers();
  const [selected, setSelected] = useState('')

  const handleClick = (customer) => {
    setSelected(customer.id);
    onSelect(customer);
  }

    return (
        <List>
            {customers.map((c) => (
                <ListItemButton 
                    key={c.id} 
                    onClick={() => handleClick(c)} 
                    selected={selected === c.id}
                >
                <ListItemStart> 
                    <Avatar imageUrl={c.avatar} alt={c.fullName}/>
                </ListItemStart>
                <ListItemText text={c.fullName}>
                    <small>{c.company}</small>
                </ListItemText>
                </ListItemButton>
            ))}
        </List>
    )
}

export default CustomersList;