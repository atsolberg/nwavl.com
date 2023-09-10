import React from "react";
import { twMerge } from "tailwind-merge";

function ExpandableImage({ src, alt, className, ...rest }) {
  const [expanded, setExpanded] = React.useState(false);
  return (
    <img
      src={src}
      onClick={() => setExpanded(!expanded)}
      {...rest}
      className={twMerge(
        "cursor-pointer rounded border-2 border-sky-600",
        "hover:border-2 hover:border-sky-300",
        className,
        !expanded && "w-[200px] h-auto"
      )}
      alt={alt}
    />
  );
}

export default ExpandableImage;
