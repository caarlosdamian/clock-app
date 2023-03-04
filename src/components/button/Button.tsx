import React from "react";
import { arrowDown, arrowUp } from "../../assets";
import "./Button.scss";

export const Button = ({
  label,
  handleClick,
  show,
}: {
  label: string;
  handleClick: () => void;
  show: boolean;
}) => {
  return (
    <div className="button" onClick={handleClick}>
      <span>{label}</span>
      <div className="button-icon">
        <img
          src={show ? arrowUp : arrowDown}
          alt="arrow"
          className={`button-icon-img ${show ? "rotate" : ""}`}
        />
      </div>
    </div>
  );
};
