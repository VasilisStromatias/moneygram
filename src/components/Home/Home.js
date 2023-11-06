import React, { useEffect, useState } from "react";
import Balance from "./Balance";
import PlusButton from "./PlusButton";
import { useLocalStorage } from "../../localStorage";

function Home() {
  const [income, setIncome] = useState({value : 0, category : ''});
  const [outcome, setOutcome] = useState({value : 0 , category : ''});

  const {setLocalStorageData, getLocalStorageData} = useLocalStorage('DATA');

  useEffect ( () => {
    setLocalStorageData({
      income : income.value , 
      outcome : outcome.value ,  
      balance: income.value-outcome.value 
    })
    console.log(getLocalStorageData());
  }, [income, outcome])


  const sessionData = {
    income,
    setIncome,
    outcome,
    setOutcome,
  };

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
