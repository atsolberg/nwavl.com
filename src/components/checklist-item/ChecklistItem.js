import React from "react";
import useHtmlId from "../../hooks/useHtmlId";

function ChecklistItem({ children, id: propId, ...rest }) {
  const id = useHtmlId(propId);
  return (
    <li id={id} {...rest}>
      <div className="flex">
        <span>
          <input id={`${id}-cb`} type="checkbox" />
        </span>
        <span className="flex-grow ml-2">
          <label htmlFor={`${id}-cb`}>{children}</label>
        </span>
      </div>
    </li>
  );
}

export default ChecklistItem;
