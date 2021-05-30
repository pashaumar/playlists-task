import {
  FETCH_PLAYLISTS_BEGIN,
  FETCH_PLAYLISTS_SUCCESS,
  FETCH_PLAYLISTS_FAIL,
} from "./type";
import axios from "axios";
export const fetchPlaylists = () => async (dispatch) => {
  dispatch({
    type: FETCH_PLAYLISTS_BEGIN,
  });
  try {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization:
          "Basic " +
          btoa(
            "5d24460f9f9641db9f8007653484bb12" +
              ":" +
              "ada53ce19ccd4aa8b4635e943d63daf6"
          ),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((res) => {
      axios("https://api.spotify.com/v1/browse/featured-playlists", {
        method: "GET",
        headers: { Authorization: "Bearer " + res.data.access_token },
      }).then((res) => {
        dispatch({
          type: FETCH_PLAYLISTS_SUCCESS,
          payload: res.data.playlists.items,
        });
      });
    });
  } catch (error) {
    dispatch({ type: FETCH_PLAYLISTS_FAIL, payload: error });
  }
};
