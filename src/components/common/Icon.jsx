import React from "react";
import styled from "styled-components";

const IconSpan = styled.span`
  color: ${(props) => props.color};
  font-size: ${(props) => (props.size === "md-18" ? "18px" : "24px")};
  transform:rotate(${(props) => props.deg}deg);
}
`;

const Icon = ({ name, id, size, clickEvent, color, deg }) => {
  return (
    <IconSpan
      className="material-icons"
      size={size}
      id={id}
      onClick={clickEvent}
      color={color}
      deg={deg}
    >
      {name}
    </IconSpan>
  );
};

export default Icon;
