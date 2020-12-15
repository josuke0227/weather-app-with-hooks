import React from "react";
import Loader from "react-loader-spinner";
import styled from "styled-components";

const LoaderWrapper = styled.div`
  position: ${(props) => props.position};
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${(props) => props.bgColor};
`;

const MyLoader = ({
  bgColor,
  position,
  name,
  color,
  text,
  width,
  height,
  timeout,
}) => {
  return (
    <LoaderWrapper bgColor={bgColor} position={position}>
      <h1 style={{ color: "#e7e7eb", marginBottom: "1rem" }}>{text}</h1>
      <Loader
        type={name}
        color={color}
        height={width}
        width={height}
        timeout={timeout}
      />
    </LoaderWrapper>
  );
};

export default MyLoader;
