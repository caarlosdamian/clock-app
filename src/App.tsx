import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchQuotable, fetchTime, fetchTimeZones } from "./redux/services/api";
import { RootState } from "./redux/store";
import "./App.scss";

export const App = () => {
  const dispatch = useDispatch<any>();
  const { client_ip } = useSelector((state: RootState) => state.time.data);

  useEffect(() => {
    dispatch(fetchTime());
    dispatch(fetchTimeZones());
    dispatch(fetchQuotable());
  }, []);

  return <div className="app">App</div>;
};
