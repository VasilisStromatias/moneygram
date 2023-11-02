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
    backgroundColor: "#20b480",
  },
};

function PlusButton() {
  const [incomeIsOpen, setIncomeIsOpen] = useState(false);
  const [outcomeIsOpen, setOutcomeIsOpen] = useState(false);

  const [incomeInput, setIncomeInput] = useState("0.00");
  const [outcomeInput, setOutcomeInput] = useState("0.00");

  const openIncome = () => {
    setIncomeIsOpen(true);
  };
  const closeIncome = () => {
    setIncomeIsOpen(false);
    setIncomeInput("0.00");
  };

  const openOutcome = () => {
    setOutcomeIsOpen(true);
  };
  const closeOutcome = () => {
    setOutcomeIsOpen(false);
    setOutcomeInput("0.00");
  };

  const incomeValueChange = (e) => {
    const target = e.target;
    const value = target.value;
    setIncomeInput(value);
  };

  const outcomeValueChange = (e) => {
    const target = e.target;
    const value = target.value;
    setOutcomeInput(value);
  };

  const togglePlus = () => {
    $("body").toggleClass("plus-menu-opened");
    $(".plus-options").toggleClass("open");
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
          <label htmlFor="income-input"> Add some income</label>
          <input
            type="number"
            min={0.05}
            max={2500.0}
            step={0.05}
            id="income-input"
            value={incomeInput}
            onChange={incomeValueChange}
            placeholder={incomeInput}
          />
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
          <label htmlFor="outcome-input"> Add some outcome</label>
          <input
            type="text"
            min={0.05}
            max={2500.0}
            step={0.05}
            id="outcome-input"
            value={outcomeInput}
            onChange={outcomeValueChange}
            placeholder={outcomeInput}
          />
        </div>
      </Modal>
    </>
  );
}

export default PlusButton;
