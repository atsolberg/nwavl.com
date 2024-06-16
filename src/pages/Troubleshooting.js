import React from "react";

import TroubleshootingInfo from "../components/troubleshooting-info/TroubleshootingInfo.js";
import Heading from "../components/heading/Heading";

function Home() {
  return (
    <div className="relative my-0 mx-auto w-11/12 md:w-10/12 lg:w-9/12">
      <Heading as="h1" size="xl">
        Trouble-Shooting
      </Heading>
      <TroubleshootingInfo />
    </div>
  );
}

export default Home;
