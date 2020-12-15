import styled from "styled-components";

const FlexItem = styled.div`
  flex: ${(props) => props.flex || 1};
`;

export default FlexItem;
