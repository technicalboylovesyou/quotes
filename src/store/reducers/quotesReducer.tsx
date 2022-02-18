import { INSTALL_QUOTES, ERROR_QUOTES, UPDATE_QUOTES } from "../types";

const initialState = {
  prevQuotes: [],
  quotes: [],
  error: "",
  update: false,
};

type Action = {
  type: string,
  quotes?: any,
  prevQuotes?: any,
  error?: string,
  update?: boolean,
}

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case INSTALL_QUOTES:
      return {
        ...state,
        quotes: action.quotes,
        prevQuotes: action.prevQuotes
      };
    case ERROR_QUOTES:
      return {
        ...state,
        error: action.error
      };
    case UPDATE_QUOTES:
      return {
        ...state,
        update: action.update
      };
    default:
      return state;
  }
}
