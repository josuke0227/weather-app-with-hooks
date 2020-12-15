import React from "react";
import fahrenheitConverter from "../../util/fahrenheitConverter";

const Temparature = ({ temp, isFahrenheit, unitFont, numFont }) => {
  const value = Math.round(temp);
  const child = isFahrenheit ? (
    <React.Fragment>
      <span className={numFont}>{fahrenheitConverter(value)}</span>
      <span className={unitFont}>&#8457;</span>
    </React.Fragment>
  ) : (
    <React.Fragment>
      <span className={numFont}>{value}</span>
      <span className={unitFont}>&#8451;</span>
    </React.Fragment>
  );

  return child;
};

export default Temparature;
