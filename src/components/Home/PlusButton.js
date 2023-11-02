import React from "react";
import Plus from "../../assets/plus-button.svg";

function PlusButton() {
  return (
    <>
      <div className="plus-button">
        <img src={Plus} alt="plus button" />
      </div>
    </>
  );
}

export default PlusButton;
