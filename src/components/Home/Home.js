import React from "react";
import Balance from "./Balance";
import PlusButton from "./PlusButton";

function Home() {
  return (
    <div className="home-page">
      <div className="home-page-wrapper">
        <div className="home-page-inner">
          <Balance />
          <PlusButton />
        </div>
      </div>
    </div>
  );
}

export default Home;
