import metaWeather from "../api/metaWeather";

const getWeatherByQuery = async (query) => {
  const { data } = await metaWeather.get("api/location/search", {
    params: { query },
  });

  return data;
};

export default getWeatherByQuery;
