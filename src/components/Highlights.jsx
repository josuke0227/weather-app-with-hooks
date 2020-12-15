import React from "react";
import Compus from "./Compus";
import PercentageBar from "./PercentageBar";

import styled from "styled-components";

const HighlightPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Highlights = (props) => {
  const {
    wind_speed,
    wind_direction,
    wind_direction_compass,
    humidity,
    visibility,
    air_pressure,
  } = props.forecasts;

  const contents = [
    {
      label: "Wind Speed",
      content: wind_speed,
      unit: "mpn",
      widget: <Compus deg={wind_direction} dir={wind_direction_compass} />,
    },
    {
      label: "Humidity",
      content: humidity,
      unit: "%",
      widget: <PercentageBar percentage={humidity} />,
    },
    { label: "Visibility", unit: "miles", content: visibility },
    { label: "Air Pressure", unit: "hpa", content: air_pressure },
  ];

  return contents.map((content) => {
    return (
      <HighlightPanel
        id={content.label}
        key={content.label}
        className="bg-secondary p-4"
      >
        <div className="label s-s tx-primary">{content.label}</div>
        <div className="content">
          <span className="s-l tx-primary">
            {content.content % 1 !== 0
              ? Math.round(content.content)
              : content.content}
          </span>
          <span className="s-m tx-primary">{content.unit}</span>
        </div>
        {content.widget && content.widget}
      </HighlightPanel>
    );
  });
};

export default Highlights;
