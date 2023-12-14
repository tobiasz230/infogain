import "./ListItemButton.css";

const ListItemButton = ({ selected = false, children, onClick }) => {
  const selectedClass = selected ? " list-item-button--selected" : "";

  return (
    <div
      className={"list-item-button" + selectedClass}
      onClick={onClick}
      role="button"
    >
      {children}
    </div>
  );
};

export default ListItemButton;
