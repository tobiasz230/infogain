import { useState } from "react";
import List from "../../../_shared/ui/list/List";
import ListItemText from "../../../_shared/ui/list-item/list-item-text/ListItemText";
import ListItemStart from "../../../_shared/ui/list-item/list-item-start/ListItemStart";
import ListItemButton from "../../../_shared/ui/list-item/list-item-button/ListItemButton";
import Avatar from "../../../_shared/ui/avatar/Avatar"

const UsersList = ({users = [], onSelect}) => {
    const [selected, setSelected] = useState('');

    const handleClick = (user) => {
        setSelected(user.id);
        onSelect(user);
    };

    return (
        <List>
            {users.map((user) => (
                <ListItemButton
                    key={user.id}
                    onClick={() => handleClick(user)}
                    selected={selected === user.id}
                    >
                    <ListItemStart>
                        <Avatar imageUrl={user.avatar} alt={user.fullName} />
                    </ListItemStart>
                    <ListItemText text={user.fullName}>
                        <small>{user.company}</small>
                    </ListItemText>
                </ListItemButton>
            ))}
        </List>
    )
}

export default UsersList