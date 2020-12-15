import React from "react";
import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
`;

const Gage = styled.div`
  width: 100%;
  height: 10px;
  background-color: var(--tx-primary);
  border-radius: 80px;
`;

const Ratio = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  border-radius: 80px;
  background-color: #ffec65;
`;

const PercentageBar = ({ percentage }) => {
  return (
    <div className="ma-3">
      <FlexContainer style={{ width: "100%" }}>
        <div
          className="s-ss tx-primary"
          style={{ flex: "1", textAlign: "start" }}
        >
          0
        </div>
        <div
          className="s-ss tx-primary"
          style={{ flex: "1", textAlign: "center" }}
        >
          50
        </div>
        <div
          className="s-ss tx-primary"
          style={{ flex: "1", textAlign: "end" }}
        >
          100
        </div>
      </FlexContainer>
      <Gage>
        <Ratio percentage={percentage}></Ratio>
      </Gage>
    </div>
  );
};

export default PercentageBar;
