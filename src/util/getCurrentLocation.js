import metaWeather from "../api/metaWeather";

const getCurrentLocation = async (lat, long) => {
  const { data } = await metaWeather.get("api/location/search/", {
    params: { lattlong: `${lat},${long}` },
  });

  return data[0];
};

export default getCurrentLocation;
