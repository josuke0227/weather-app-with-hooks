import React from "react";

const DateIndicator = ({ date, fontSize }) => {
  const dateArr = new Date(date).toString().split(" ");
  const dateToday = dateArr[0];
  const month = dateArr[1];
  const day = new Date(date).getDate();

  return <span className={fontSize}>{`${dateToday}, ${day} ${month}`}</span>;
};

export default DateIndicator;
