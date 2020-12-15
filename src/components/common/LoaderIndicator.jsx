import React from "react";
import MyLoader from "./MyLoader";
import { usePromiseTracker } from "react-promise-tracker";

const LoaderIndicator = ({
  color,
  area,
  bgColor,
  position,
  name,
  text,
  width,
  height,
  timeout,
}) => {
  const { promiseInProgress } = usePromiseTracker({ area });

  return (
    promiseInProgress && (
      <MyLoader
        bgColor={bgColor}
        position={position}
        name={name}
        text={text}
        width={width}
        height={height}
        color={color}
        timeout={timeout}
      />
    )
  );
};

export default LoaderIndicator;
