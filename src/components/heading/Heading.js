import React from "react";
import cx from "classnames";

function Heading({ as = "h3", size = "md", children }) {
  const As = as;
  return (
    <As
      className={cx([
        "mt-5 mb-3",
        `text-${size}`,
        "leading-6",
        "font-semibold",
        "text-slate-700 dark:text-sky-400",
      ])}
    >
      {children}
    </As>
  );
}

export default Heading;
