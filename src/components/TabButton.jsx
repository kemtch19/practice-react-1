import { Children } from "react";

export const TabButton = ({ children, onClick }) => {
  return (
    <li>
      <button onClick={onClick} className="btn btn-primary cursor-pointer">
        {children}
      </button>
    </li>
  );
};
