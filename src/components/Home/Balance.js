import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";

function Balance({ data }) {
  const [currency, setCurrency] = useState("€");
  const [income, setIncome] = useState(data.income);
  const [outcome, setOutcome] = useState(data.outcome);
  const [balance, setBalance] = useState(data.income - data.outcome);

  // console.log(data.income);
  // console.log(data.outcome);

  return (
    <div className="balance-section">
      <div className="balance-section-inner">
        <div className="income">
          <h2>Income</h2>
          <span className="income-value">
            <CurrencyFormat
              value={data.income}
              displayType={"text"}
              thousandSeparator={true}
              suffix={currency}
              decimalScale={2}
            />
          </span>
        </div>
        <div className="balance">
          <h2>Balance</h2>
          <span className="balance-value">
            <CurrencyFormat
              value={data.income - data.outcome}
              displayType={"text"}
              thousandSeparator={true}
              suffix={currency}
              decimalScale={2}
            />
          </span>
        </div>
        <div className="outcome">
          <h2>Outcome</h2>
          <span className="outcome-value">
            <CurrencyFormat
              value={data.outcome}
              displayType={"text"}
              thousandSeparator={true}
              suffix={currency}
              decimalScale={2}
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Balance;
