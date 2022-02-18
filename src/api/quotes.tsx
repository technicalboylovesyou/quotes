import axios from 'axios';

import { HOST_API } from "./config";

export const getQuotes = async () => {
  return await axios
    .get(HOST_API + 'returnTicker')
    .then((response) => {
      return response.data;
    })
    .catch((err) => Promise.reject(err.message));
};
