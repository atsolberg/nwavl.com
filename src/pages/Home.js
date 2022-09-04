import React from "react";
import cx from "classnames";
import PreserviceChecklist from "../components/preservice-checklist/PreserviceChecklist";

function Home() {
  return (
    <div className="relative my-0 mx-auto w-11/12 md:w-10/12 lg:w-9/12">
      <h1
        className={cx([
          "mt-5 mb-3",
          "text-xl",
          "leading-6",
          "font-semibold",
          "text-slate-700 dark:text-sky-400",
        ])}
      >
        Pre-Service Checklist
      </h1>
      <PreserviceChecklist />
    </div>
  );
}

export default Home;
