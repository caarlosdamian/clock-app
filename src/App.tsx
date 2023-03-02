import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotable, fetchTime, fetchTimeZones } from "./redux/services/api";
import { RootState } from "./redux/store";
import "./App.scss";
import { useWidth } from "./hooks/useWidth";
import { useBackground } from "./hooks/useBackground";

export const App = () => {
  const dispatch = useDispatch<any>();
  const { client_ip, datetime } = useSelector(
    (state: RootState) => state.time.data
  );
  const backgrounImage = useBackground(datetime);
  const [show,setShow]= useState(false)

  useEffect(() => {
    dispatch(fetchTime());
    dispatch(fetchTimeZones());
    dispatch(fetchQuotable());
  }, []);

  return (
    <div className="app" style={{ backgroundImage: `url(${backgrounImage})` }}>
      <div className="container">
        <div className="top">d</div>
        <div className="middle" onClick={()=>setShow(!show)}>d</div>
        <div className={`bottom ${show? 'show':''}`}>
        </div>
      </div>
    </div>
  );
};
