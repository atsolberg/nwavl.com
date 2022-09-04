import React from "react";

function A({ href, children, rest }) {
  return (
    <a className="text-sky-500" href={href} {...rest}>
      {children}
    </a>
  );
}

export default A;
