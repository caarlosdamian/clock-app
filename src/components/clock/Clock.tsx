import React from "react";
import { useSelector } from "react-redux";
import { sun } from "../../assets";
import { useBackground } from "../../hooks/useBackground";
import { RootState } from "../../redux/store";
import "./Clock.scss";

export const Clock = () => {
  const { client_ip, datetime } = useSelector(
    (state: RootState) => state.time.data
  );
  const { icon, label } = useBackground(datetime);

  return (
    <div className="clock">
      <div className="top">
        <img src={icon} alt="sun" />
        <span className="top-header">{label}</span>
      </div>
      <div className="middle"></div>
      <div className="bottom"></div>
    </div>
  );
};
