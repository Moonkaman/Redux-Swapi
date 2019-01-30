import { FETCH_CHARS_START, FETCH_CHARS_SUCCESS, FETCH_CHARS_FAIL } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ''
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARS_START:
      return {
        ...state,
        fetching: true
      }
    
    case FETCH_CHARS_SUCCESS:
      return {
        ...state,
        characters: action.payload,
        fetching: false,
        error: ''
      }

    case FETCH_CHARS_FAIL:
      return {
        ...state,
        fetching: false,
      }

    default:
      return state;
  }
};
