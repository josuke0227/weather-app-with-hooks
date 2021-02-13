import React from "react";
import styled from "styled-components";
import Icon from "./common/Icon";

const WindDirWrapper = styled.div`
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
    <WindDirWrapper className="ma-3">
      <CompusCase>
        <Icon
          name="navigation"
          color="var(--tx-primary)"
          size="md-18"
          deg={deg}
        />
      </CompusCase>
      <span className="s-ss tx-secondary">{dir}</span>
    </WindDirWrapper>
  );
};

export default WindowDirectionIndicator;
