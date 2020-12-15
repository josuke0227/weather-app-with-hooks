import React from "react";
import ImageGenerator from "./common/ImageGenerator";
import Temparature from "./common/Temparature";
import Highlights from "./Highlights";
import DateIndicator from "./common/DateIndicator";

import styled from "styled-components";
import RoundButton from "./styledComponents/RoundButton";
import FlexItem from "./styledComponents/FlexItem";
import FlexContainer from "./styledComponents/FlexContainer";

const Sub = styled(FlexItem)`
  padding: 4vh 11vw;
`;

const FiveDaysWt = styled.div`
  display: flex;
  grid-column-gap: 1.8vw;

  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-template-rows: auto auto;

    grid-gap: 1vw;
  }
`;

const Card = styled(FlexContainer)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HighlightsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 25vh 15vh;
  grid-gap: 3vw;
  text-align: center;

  @media (max-width: 750px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;

    grid-gap: 1vw;
  }
`;

const TempContainer = styled(FlexContainer)`
  width: 100%;
`;

const Celceus = styled(RoundButton)`
  color: ${(props) => (props.isFahrenheit ? "#E7e7eb" : "#110E3C")};
  background-color: ${(props) => (props.isFahrenheit ? "#585676" : "E7E7EB")};
`;

const Fahrenheit = styled(RoundButton)`
  color: ${(props) => (props.isFahrenheit ? "#110E3C" : "#E7e7eb")};
  background-color: ${(props) => (props.isFahrenheit ? "E7E7EB" : "#585676")};
`;

const SubWindow = ({ setUnit, forecasts, current, isFahrenheit }) => {
  const renderedWeather = (forecasts) => {
    const fiveDaysForecast = forecasts.slice(1, forecasts.length);

    return fiveDaysForecast.map((forecast, index) => {
      return (
        <Card className="bg-secondary p-1" key={forecast.id} direction="column">
          {index === 0 ? (
            <span className="s-s tx-primary">Tomorrow</span>
          ) : (
            <DateIndicator
              fontSize="s-s tx-primary"
              date={forecast.applicable_date}
            />
          )}
          <ImageGenerator
            wtCode={forecast.weather_state_abbr}
            width="60%"
            height="60%"
          />
          <TempContainer className="ma-3">
            <FlexItem>
              <Temparature
                numFont="s-s tx-primary"
                unitFont="s-s tx-primary"
                temp={forecast.max_temp}
                isFahrenheit={isFahrenheit}
              />
            </FlexItem>
            <FlexItem>
              <Temparature
                numFont="s-s tx-secondary"
                unitFont="s-s tx-secondary"
                temp={forecast.min_temp}
                isFahrenheit={isFahrenheit}
              />
            </FlexItem>
          </TempContainer>
        </Card>
      );
    });
  };

  return (
    <Sub id="sub-window" className="wallpaper" flex="78vw">
      <div style={{ textAlign: "end" }}>
        <Celceus
          isFahrenheit={isFahrenheit}
          style={{ marginRight: "0.5rem" }}
          onClick={() => setUnit(false)}
        >
          &#8451;
        </Celceus>
        <Fahrenheit isFahrenheit={isFahrenheit} onClick={() => setUnit(true)}>
          &#8457;
        </Fahrenheit>
      </div>
      <FiveDaysWt id="five-days-wt" className="ma-7">
        {renderedWeather(forecasts)}
      </FiveDaysWt>
      <div className="ma-7 tx-primary">Today's Highlights</div>
      <HighlightsContainer className="ma-3">
        <Highlights forecasts={current} />
      </HighlightsContainer>
    </Sub>
  );
};

export default SubWindow;
