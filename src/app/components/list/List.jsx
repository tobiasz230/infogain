import { Children } from "react";
import "./List.css";

const List = ({ children }) => (
  <ul className="list">
    {Children.map(children, (child) => (
      <li className="list__item">{child}</li>
    ))}
  </ul>
);

export default List;
