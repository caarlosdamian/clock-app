import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { useBackground } from "../../hooks/useBackground";
import { useWidth } from "../../hooks/useWidth";
import { RootState } from "../../redux/store";
import "./Clock.scss";

export const Clock = () => {
  const {
    time: {
      data: { datetime, abbreviation },
    },
    location: {
      data: { city, country_code },
    },
  } = useSelector((state: RootState) => state);
  const { icon, label } = useBackground(datetime);
  const width = useWidth();
  const hours = useMemo(() => new Date(datetime).getHours(), [datetime]);
  const minutes = useMemo(() => new Date(datetime).getMinutes(), [datetime]);

  return (
    <div className="clock">
      <div className="clock-top">
        <img src={icon} alt="sun" />
        <span className="clock-top-header">
          {label} {width >= 768 && `, IT’S CURRENTLY`}
        </span>
      </div>
      <div className="clock-middle">
        <span className="clock-middle-header">{`${hours}:${minutes}`}</span>
        <span className="clock-middle-subtitle">{abbreviation}</span>
      </div>
      <div className="clock-bottom">
        <span className="clock-bottom-header">
          IN {city},{country_code}
        </span>
      </div>
    </div>
  );
};
