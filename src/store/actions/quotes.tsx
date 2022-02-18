import { INSTALL_QUOTES, ERROR_QUOTES, UPDATE_QUOTES } from "../types";
import {getQuotes as getQuotesApi} from "../../api/quotes";

export const installQuotes = (prevQuotes) => async (dispatch) => {
  function onSuccess(success) {
    dispatch({type: INSTALL_QUOTES, quotes: success, prevQuotes: prevQuotes});
  }

  function onError(error) {
    dispatch({type: ERROR_QUOTES, error: error})
  }

  try {
    const data = await getQuotesApi();
    const keys = Object.keys(data);
    const quotes = keys.map((key) => {
      return {
        id: data[key].id,
        name: key.replace('_', ' > '),
        last: data[key].last,
        highestBid: data[key].highestBid,
        percentChange: data[key].percentChange
      }
    });
    return onSuccess(quotes);
  } catch (error) {
    console.log(error);
    return onError(error)
  }
};

export const startUpdate = () => (dispatch) => {
  dispatch({type: UPDATE_QUOTES, update: true});
};

export const stopUpdate = () => (dispatch) => {
  dispatch({type: UPDATE_QUOTES, update: false});
};


