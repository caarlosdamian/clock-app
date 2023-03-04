import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocation, fetchQuotable, fetchTime, fetchTimeZones } from "./redux/services/api";
import { RootState } from "./redux/store";
import { useBackground } from "./hooks/useBackground";
import { Quote } from "./components/quote/Quote";
import { Clock } from "./components/clock/Clock";
import "./App.scss";

export const App = () => {
  const dispatch = useDispatch<any>();
  const { client_ip, datetime } = useSelector(
    (state: RootState) => state.time.data
  );
  const { bg } = useBackground(datetime);
  const [show, setShow] = useState(false);

  useEffect(() => {
    dispatch(fetchTime());
    dispatch(fetchTimeZones());
    dispatch(fetchQuotable());
    dispatch(fetchLocation());
  }, []);

  return (
    <div className="app" style={{ backgroundImage: `url(${bg})` }}>
      <div className="container">
        <div className="top">
          <Quote />
        </div>
        <div className="middle" onClick={() => setShow(!show)}>
          <Clock />
        </div>
        <div className={`bottom ${show ? "show" : ""}`}></div>
      </div>
    </div>
  );
};
