import {
  FETCH_PLAYLISTS_BEGIN,
  FETCH_PLAYLISTS_SUCCESS,
  FETCH_PLAYLISTS_FAIL,
} from "../actions/type";

const initialState = {
  playlists: [],
  error: "",
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLAYLISTS_BEGIN:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PLAYLISTS_SUCCESS:
      return {
        ...state,
        playlists: action.payload,
        loading: false,
      };
    case FETCH_PLAYLISTS_FAIL:
      return {
        ...state,
        playlists: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
