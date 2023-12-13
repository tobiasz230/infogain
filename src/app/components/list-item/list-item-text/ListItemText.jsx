import "./ListItemText.css";

const ListItemText = ({ text, children }) => {
  return (
    <div className="list-item-text">
      <span className="list-item-text__primary">{text}</span>
      {children}
    </div>
  );
};

export default ListItemText;
