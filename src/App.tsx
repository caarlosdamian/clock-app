import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocation, fetchQuotable, fetchTime } from "./redux/services/api";
import { RootState } from "./redux/store";
import { useBackground } from "./hooks/useBackground";
import { Quote } from "./components/quote/Quote";
import { Clock } from "./components/clock/Clock";
import "./App.scss";
import { Button } from "./components/button/Button";
import { deatilsKeys } from "./utils";

export const App = () => {
  const dispatch = useDispatch<any>();
  const timeInfo = useSelector((state: RootState) => state.time.data);
  const { bg, color, day } = useBackground(timeInfo.datetime);
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetchTime());
    dispatch(fetchQuotable());
    dispatch(fetchLocation());
  }, []);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="overlay"></div>
      <div className="container">
       {!show&& <div className="top">
          <Quote />
        </div>}
        <div className={`middle ${show ? "show" : ""}`}>
          <Clock />
          <Button
            show={show}
            label={show ? "Less" : "More"}
            handleClick={handleShow}
          />
        </div>
        <div
          style={{ background: color }}
          className={`bottom ${show ? "show" : ""}`}
        >
          {deatilsKeys.map((item: any) => (
            <div className="details">
              <span
                className="details-header"
                style={{ color: !day ? "#FFFFFF" : "#303030" }}
              >
                {item.label}
              </span>
              <span
                className="details-subtitle"
                style={{ color: !day ? "#FFFFFF" : "#303030" }}
              >
                {timeInfo[item.id]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
