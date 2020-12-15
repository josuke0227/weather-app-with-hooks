import styled from "styled-components";

const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "column" ? "column" : "row"};
  align-items: ${(props) => props.xAlign && "center"};
  justify-items: ${(props) => props.yAlign && "center"};
`;

export default FlexContainer;
