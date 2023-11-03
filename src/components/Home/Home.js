import React, { useState } from "react";
import Balance from "./Balance";
import PlusButton from "./PlusButton";

function Home() {
  const [income, setIncome] = useState(0);
  const [outcome, setOutcome] = useState(0);

  const sessionData = {
    income,
    setIncome,
    outcome,
    setOutcome,
  };

  // console.log(outcome);

  return (
    <div className="home-page">
      <div className="home-page-wrapper">
        <div className="home-page-inner">
          <Balance data={sessionData} />
          <PlusButton data={sessionData} />
        </div>
      </div>
    </div>
  );
}

export default Home;
