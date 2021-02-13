import axios from "axios";
import { log } from "./logService";

export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location",
});

axios.interceptors.response.use(null, (error) => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    log(error);
    alert.error("An unexpected error occurred");
  }
  return Promise.reject(error);
});
