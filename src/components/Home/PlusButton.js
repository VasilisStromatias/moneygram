import React, { useState } from "react";
import $ from "jquery";
import Modal from "react-modal";
import Profit from "../../assets/profit.png";
import Expences from "../../assets/expenses.png";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    minWidth: "30%",
    minHeight: "40%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
    border: 0,
    padding: "40px",
    backgroundColor: "#26eaa4",
  },
};

function PlusButton({ data }) {
  const [incomeIsOpen, setIncomeIsOpen] = useState(false);
  const [outcomeIsOpen, setOutcomeIsOpen] = useState(false);

  const [incomeInput, setIncomeInput] = useState(0);
  const [outcomeInput, setOutcomeInput] = useState(0);

  const openIncome = () => {
    setIncomeIsOpen(true);
  };
  const closeIncome = () => {
    setIncomeIsOpen(false);
    setIncomeInput(0);
  };

  const openOutcome = () => {
    setOutcomeIsOpen(true);
  };
  const closeOutcome = () => {
    setOutcomeIsOpen(false);
    setOutcomeInput(0);
  };

  const incomeValueChange = (e) => {
    const target = e.target;
    const value = target.value;
    setIncomeInput(parseFloat(value));
  };

  const outcomeValueChange = (e) => {
    const target = e.target;
    const value = target.value;
    setOutcomeInput(parseFloat(value));
  };

  const togglePlus = () => {
    $("body").toggleClass("plus-menu-opened");
    $(".plus-options").toggleClass("open");
  };

  const incomeSubmit = (e) => {
    e.preventDefault();
    const inc = incomeInput;
    data.setIncome({...data.income, value : data.income.value +  inc});
    setIncomeIsOpen(false);
    setIncomeInput(0);
  };

  const outcomeSubmit = (e) => {
    e.preventDefault();
    const out = outcomeInput;
    data.setOutcome({...data.income,value : data.outcome.value + out});
    setOutcomeIsOpen(false);
    setOutcomeInput(0);
  };



  return (
    <>
      <div className="plus-section">
        <div className="plus-button" onClick={togglePlus}>
          <div className="plus-options">
            <div className="plus-options-inner">
              <ul className="plus-otions-list">
                <li>
                  <div className="option-income" onClick={openIncome}>
                    <img src={Profit} alt="add income " />
                  </div>
                </li>
                <li>
                  <div className="option-outcome" onClick={openOutcome}>
                    <img src={Expences} alt="add outcome " />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={incomeIsOpen}
        onRequestClose={closeIncome}
        style={customStyles}
        contentLabel="Income Modal"
        appElement={document.getElementById("root")}
      >
        <div className="modal-inner">
          <form onSubmit={incomeSubmit}>
            <label htmlFor="income-input"> Add some income</label>
            <input
              type="number"
              min={0.01}
              max={2500.0}
              step={0.01}
              id="income-input"
              value={incomeInput}
              onChange={incomeValueChange}
              placeholder={incomeInput}
            />
            <button>OK</button>
          </form>
        </div>
      </Modal>

      <Modal
        isOpen={outcomeIsOpen}
        onRequestClose={closeOutcome}
        style={customStyles}
        contentLabel="Outcome Modal"
        appElement={document.getElementById("root")}
      >
        <div className="modal-inner">
          <form onSubmit={outcomeSubmit}>
            <label htmlFor="outcome-input"> Add some outcome</label>
            <input
              type="number"
              min={0.01}
              max={2500.0}
              step={0.01}
              id="outcome-input"
              value={outcomeInput}
              onChange={outcomeValueChange}
              placeholder={outcomeInput}
            />
            <button>OK</button>
          </form>
        </div>
      </Modal>
    </>
  );
}

export default PlusButton;
