import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";

function Balance({ data }) {
  const [currency, setCurrency] = useState("€");

  return (
    <div className="balance-section">
      <div className="balance-section-inner">
        <div className="income">
          <h2>Income</h2>
          <span className="income-value">
            <CurrencyFormat
              value={data.income.value}
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
              value={data.income.value - data.outcome.value}
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
              value={data.outcome.value}
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
