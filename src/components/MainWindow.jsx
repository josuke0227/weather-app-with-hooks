import React from "react";
import styled from "styled-components";
import Icon from "./common/Icon";
import ImageGenerator from "./common/ImageGenerator";
import Temparature from "./common/Temparature";
import SearchPanel from "./SearchPanel";
import RoundButton from "./styledComponents/RoundButton";
import SquareButton from "./styledComponents/SquareButton";
import FlexItem from "./styledComponents/FlexItem";
import FlexContainer from "./styledComponents/FlexContainer";
import DateIndicator from "./common/DateIndicator";

const MainPanel = styled(FlexItem)`
  text-align: center;
`;

const MainWindow = ({
  setOpen,
  open,
  currentLocation,
  handleGpsButtonClick,
  isFahrenheit,
  forecasts,
}) => {
  const forecast = forecasts[0];

  return (
    <MainPanel id="main-panel" className="bg-secondary p-4" flex="32vw">
      {open ? (
        <SearchPanel />
      ) : (
        <>
          <FlexContainer id="main-widgets" yAlign>
            <SquareButton onClick={() => setOpen(true)}>Search</SquareButton>
            <RoundButton
              onClick={handleGpsButtonClick}
              style={{ marginLeft: "auto" }}
            >
              <Icon name="gps_fixed" />
            </RoundButton>
          </FlexContainer>
          <div className="weather-display ma-3">
            <div id="weather-today">
              <ImageGenerator
                wtCode={forecast.weather_state_abbr}
                width="50%"
                height="50%"
              />
              <div id="cur-temp" className="ma-8">
                <Temparature
                  temp={forecast.the_temp}
                  isFahrenheit={isFahrenheit}
                  numFont="m-l tx-primary"
                  unitFont="m-m tx-secondary"
                />
              </div>
              <div id="cur-wt-state" className="m-m ma-8 tx-secondary">
                {forecast.weather_state_name}
              </div>
              <div id="cur-date" className="m-s ma-8 tx-secondary">
                Today・
                <DateIndicator date={forecast.applicable_date} />
              </div>
              <div id="location" className="m-s ma-3 tx-secondary">
                {currentLocation.title}
              </div>
            </div>
          </div>
        </>
      )}
    </MainPanel>
  );
};

export default MainWindow;
