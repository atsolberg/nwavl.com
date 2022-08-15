import React from "react";

function ChecklistItem({ children, ...rest }) {
  return (
    <label className="flex" {...rest}>
      <span>
        <input type="checkbox" />
      </span>
      <span className="flex-grow ml-2">{children}</span>
    </label>
  );
}

export default ChecklistItem;
