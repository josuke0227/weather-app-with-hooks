import metaWeather from "../api/metaWeather";

const getWeatherByWoeid = async (woeid) => {
  const weatherData = await metaWeather.get(`api/location/${woeid}/`);
  return weatherData;
};

export default getWeatherByWoeid;
