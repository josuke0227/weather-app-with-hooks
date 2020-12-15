import React, { useEffect, useState } from "react";
import areas from "./constants/areas";
import getCurrentLocation from "./util/getCurrentLocation";
import getWeatherByWoeid from "./util/getWeatherByWoeid";
import getWeatherByQuery from "./util/getWeatherByQuery";
import "./App.css";

import styled from "styled-components";
import GlobalStyles from "./components/styledComponents/GlobalStyles";
import MainWindow from "./components/MainWindow";
import SubWindow from "./components/SubWIndow";
import MyLoader from "./components/common/MyLoader";
import LoaderIndicator from "./components/common/LoaderIndicator";
import { trackPromise } from "react-promise-tracker";

const Container = styled.div`
  display: flex;
  background-color: green;
  height: 100vh;

  @media (max-width: 1100px) {
    flex-direction: column;
  } ;
`;

const App = () => {
  const [coords, setCoords] = useState({});
  const [currentLocation, setCurrentLocation] = useState({});
  const [forecasts, setForecasts] = useState([]);
  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [back, setBack] = useState(false);
  const [results, setResults] = useState([]);
  const [isFahrenheit, setUnit] = useState(false);
  const [isDay, setBoolean] = useState("");

  useEffect(() => {
    const success = async (pos) => {
      setCoords(pos.coords);
    };

    const fail = async (err) => {
      alert(err.message);
    };

    navigator.geolocation.getCurrentPosition(success, fail);
  }, []);

  useEffect(() => {
    const searchCurrentLocation = async ({ latitude, longitude }) => {
      const result = await trackPromise(
        getCurrentLocation(latitude, longitude),
        areas.display
      );
      setCurrentLocation(result);
    };

    searchCurrentLocation(coords);
  }, [coords, back]);

  useEffect(() => {
    const getWeatherData = async () => {
      const { data } = await trackPromise(
        getWeatherByWoeid(currentLocation.woeid),
        areas.display
      );
      setBoolean(data.time > data.sun_rise && data.time < data.sun_set);
      setForecasts(data.consolidated_weather);
    };
    getWeatherData();
  }, [currentLocation]);

  useEffect(() => {
    const search = async () => {
      const data = await trackPromise(getWeatherByQuery(term), areas.search);
      setResults(data);
    };

    if (term && !results.length) {
      search();
    } else {
      const timeoutId = setTimeout(() => {
        if (term) {
          search();
        }
      }, 800);

      return () => {
        clearTimeout(timeoutId);
      };
    }
  }, [term]);

  const current = forecasts[0];

  return (
    <React.Fragment>
      <GlobalStyles isDay={isDay} />
      <LoaderIndicator
        name="Puff"
        bgColor="rgba(0, 0, 0, 0.5)"
        color="#ffec65"
        position="absolute"
        area={areas.display}
        width="150"
        height="150"
      />
      <Container id="container">
        {forecasts.length ? (
          <React.Fragment>
            <MainWindow
              isDay={isDay}
              open={open}
              setOpen={setOpen}
              term={term}
              setTerm={setTerm}
              results={results}
              setResults={setResults}
              currentLocation={currentLocation}
              setCurrentLocation={setCurrentLocation}
              back={back}
              setBack={setBack}
              current={current}
              isFahrenheit={isFahrenheit}
            />
            <SubWindow
              setUnit={setUnit}
              forecasts={forecasts}
              current={current}
              isFahrenheit={isFahrenheit}
            />
          </React.Fragment>
        ) : (
          <MyLoader
            name="Puff"
            position="absolute"
            bgColor="#535c68"
            color="#e7e7eb"
            text="Getting Weather Info..."
            width="150"
            height="150"
          />
        )}
      </Container>
    </React.Fragment>
  );
};

export default App;
