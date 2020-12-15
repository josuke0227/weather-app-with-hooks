import styled from "styled-components";

const StyledButton = styled.button`
  border: none;
  color: var(--tx-primary);
  background-color: var(--bg-btn);
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

export default StyledButton;
