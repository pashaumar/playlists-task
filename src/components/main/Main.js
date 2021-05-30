import React, { useState, useEffect } from "react";
import axios from "axios";
import LeftPanel from "../leftPanel/LeftPanel";
function Main() {
  const clientId = "5d24460f9f9641db9f8007653484bb12";
  const clientSecret = "ada53ce19ccd4aa8b4635e943d63daf6";
  const [playlists, setPlayLists] = useState([]);

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((res) => {
      axios("https://api.spotify.com/v1/browse/featured-playlists", {
        method: "GET",
        headers: { Authorization: "Bearer " + res.data.access_token },
      }).then((res) => {
        localStorage.setItem(
          "playlists",
          JSON.stringify(res.data.playlists.items)
        );
        setPlayLists(res.data.playlists.items);
      });
    });
  }, []);
  console.log(playlists);
  return (
    <div>
      <LeftPanel playlists={playlists} />
    </div>
  );
}

export default Main;
