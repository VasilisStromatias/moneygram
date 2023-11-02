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
    minWidth: "50%",
    minHeight: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
    border: 0,
    padding: "40px",
    backgroundColor: "#26eaa4",
  },
};

function PlusButton() {
  const [incomeIsOpen, setIncomeIsOpen] = useState(false);
  const [outcomeIsOpen, setOutcomeIsOpen] = useState(false);

  const openIncome = () => {
    setIncomeIsOpen(true);
  };
  const closeIncome = () => {
    setIncomeIsOpen(false);
  };

  const openOutcome = () => {
    setOutcomeIsOpen(true);
  };
  const closeOutcome = () => {
    setOutcomeIsOpen(false);
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
      >
        <p>Income</p>
      </Modal>

      <Modal
        isOpen={outcomeIsOpen}
        onRequestClose={closeOutcome}
        style={customStyles}
        contentLabel="Outcome Modal"
      >
        <p>Outcome</p>
      </Modal>
    </>
  );
}

export default PlusButton;
