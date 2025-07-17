import { Children } from "react";

export const TabButton = ({ children, onClick, isSelected }) => {
  return (
    <li>
      <button
        className={
          isSelected ? "btn btn-info" : "btn btn-primary cursor-pointer"
        }
        onClick={onClick}
      >
        {children}
      </button>
    </li>
  );
};
