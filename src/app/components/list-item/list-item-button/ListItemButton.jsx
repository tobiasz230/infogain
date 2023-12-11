import './ListItemButton.css';

const ListItemButton = ({selected = false, children, onClick}) => {
    const selectecdClass = selected ? ' list-item-button--selected' : '';

    return (
        <div className={'list-item-button' + selectecdClass} onClick={onClick} role="button">
            {children}
        </div>
    ) 
}

export default ListItemButton