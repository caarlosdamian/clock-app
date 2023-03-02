import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { refresh } from "../../assets";
import { fetchQuotable } from "../../redux/services/api";
import { RootState } from "../../redux/store";
import "./Quote.scss";

export const Quote = () => {
  const { data } = useSelector((state: RootState) => state.quote);
  const dispatch = useDispatch<any>();
  const handleRefresh = async () => {
    await dispatch(fetchQuotable());
  };
  return (
    <div className="quote">
      <div className="container">
        <div className="left">
          <span className="header">{data?.content}</span>
          <span className="subtitle">{data?.author}</span>
        </div>
        <div className="right">
          <img
            src={refresh}
            alt="refresh"
            className="img"
            onClick={handleRefresh}
          />
        </div>
      </div>
    </div>
  );
};
