import React from "react";
import Icon from "./common/Icon";
import styled from "styled-components";

const WindowDirWrapper = styled.div`
  display: flex;
  justify-content: center;
  grid-column-gap: 1rem;
  align-items: center;
`;

const CompusCase = styled.div`
  border-radius: 50%;
  background: var(--bg-btn);
  width: 40px;
  height: 40px;
  padding: 10px;
`;

const WindowDirectionIndicator = ({ dir, deg }) => {
  return (
    <WindowDirWrapper className="ma-3">
      <CompusCase>
        <Icon
          name="navigation"
          color="var(--tx-primary)"
          size="md-18"
          deg={deg}
        />
      </CompusCase>
      <span className="s-ss tx-secondary">{dir}</span>
    </WindowDirWrapper>
  );
};

export default WindowDirectionIndicator;
