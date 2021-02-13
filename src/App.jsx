import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { trackPromise } from "react-promise-tracker";
import GlobalStyles from "./components/styledComponents/GlobalStyles";
import MainWindow from "./components/MainWindow";
import SubWindow from "./components/SubWIndow";
import MyLoader from "./components/common/MyLoader";
import LoaderIndicator from "./components/common/LoaderIndicator";
import areas from "./constants/areas";
import metaWeather from "./services/httpService";
import "./App.css";

export const Context = React.createContext();

const Container = styled.div`
  display: flex;
  background-color: green;
  height: 100vh;

  @media (max-width: 1100px) {
    flex-direction: column;
  } ;
`;

const App = () => {
  const [currentLocation, setCurrentLocation] = useState({});
  const [currentLocationData, setCurrentLocationData] = useState(null);
  const [forecasts, setForecasts] = useState([]);
  const [term, setTerm] = useState("");
  const [open, setOpen] = useState(false);
  const [results, setResults] = useState([]);
  const [isFahrenheit, setUnit] = useState(false);
  const [isDay, setBoolean] = useState("");

  useEffect(() => {
    const defaultCity = {
      // Sydney
      latitude: "-33.96",
      longitude: "151.15",
    };

    const assignLocation = async ({ latitude, longitude }) => {
      const { data } = await trackPromise(
        metaWeather.get("search/", {
          params: {
            lattlong: `${latitude},${longitude}`,
          },
        }),
        areas.display
      );
      setCurrentLocation(data[0]);
    };

    assignLocation(defaultCity);
  }, []);

  useEffect(() => {
    if (currentLocationData !== null) {
      const assignLocation = async ({ latitude, longitude }) => {
        const { data } = await trackPromise(
          metaWeather.get("search/", {
            params: {
              lattlong: `${latitude},${longitude}`,
            },
          }),
          areas.display
        );
        setCurrentLocation(data[0]);
      };

      assignLocation(currentLocationData);
    } else {
      return;
    }
  }, [currentLocationData]);

  useEffect(() => {
    const getWeatherData = async () => {
      const { data } = await trackPromise(
        metaWeather.get(`${currentLocation.woeid}/`),
        areas.display
      );
      setBoolean(data.time > data.sun_rise && data.time < data.sun_set);
      setForecasts(data.consolidated_weather);
    };
    getWeatherData();
  }, [currentLocation]);

  useEffect(() => {
    const search = async () => {
      const { data } = await trackPromise(
        metaWeather.get("search", {
          params: {
            query: term,
          },
        }),
        areas.search
      );
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

  const contextValue = {
    isDay,
    setOpen,
    term,
    setTerm,
    results,
    setResults,
    setCurrentLocation,
  };

  function handleGpsButtonClick() {
    function success(pos) {
      var crd = pos.coords;
      setCurrentLocationData(crd);
    }

    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }

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
          <>
            <Context.Provider value={contextValue}>
              <MainWindow
                setOpen={setOpen}
                open={open}
                currentLocation={currentLocation}
                isFahrenheit={isFahrenheit}
                forecasts={forecasts}
                currentLocationData={currentLocationData}
                handleGpsButtonClick={handleGpsButtonClick}
              />
            </Context.Provider>
            <SubWindow
              setUnit={setUnit}
              forecasts={forecasts}
              isFahrenheit={isFahrenheit}
            />
          </>
        ) : (
          <>
            <MyLoader
              name="Puff"
              position="absolute"
              bgColor="#535c68"
              color="#e7e7eb"
              text="Getting Weather Info..."
              width="150"
              height="150"
            />
          </>
        )}
      </Container>
    </React.Fragment>
  );
};

export default App;
