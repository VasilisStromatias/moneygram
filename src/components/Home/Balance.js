import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";

function Balance() {
  const [currency, setCurrency] = useState("€");
  const [income, setIncome] = useState(100.65);
  const [outcome, setOutcome] = useState(150.11);
  const [balance, setBalance] = useState(income - outcome);

  return (
    <div className="balance-section">
      <div className="balance-section-inner">
        <div className="income">
          <h2>Income</h2>
          <span className="income-value">
            <CurrencyFormat
              value={income}
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
              value={balance}
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
              value={outcome}
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
