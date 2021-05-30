import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import axios from "axios";
import LeftPanel from "../leftPanel/LeftPanel";
import RightPanel from "../rightPanel/RightPanel";
function Main() {
  const clientId = "5d24460f9f9641db9f8007653484bb12";
  const clientSecret = "ada53ce19ccd4aa8b4635e943d63daf6";

  const [playlists, setPlayLists] = useState([]);
  const [dragInfo, setDragInfo] = useState();
  const [rightPanelPlaylists, setRightPanelPlaylists] = useState([]);

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

  const handleDragStart = (dragInfo) => {
    setDragInfo(dragInfo);
  };

  const onDrop = (draggedToId) => {
    const { playlist, id: draggedFromId } = dragInfo;
    if (draggedToId === draggedFromId) {
      return;
    }
    if (
      rightPanelPlaylists.find(
        (rightPanelPlaylist) => rightPanelPlaylist.id === playlist.id
      )
    ) {
      return;
    }
    setRightPanelPlaylists((prev) => [...prev, playlist]);
  };

  console.log(rightPanelPlaylists);

  return (
    <div className={styles.main}>
      <div className={styles.header}>Playlists</div>
      <div className={styles.panels}>
        <LeftPanel playlists={playlists} handleDragStart={handleDragStart} />
        <RightPanel onDrop={onDrop} rightPanelPlaylists={rightPanelPlaylists} />
      </div>
    </div>
  );
}

export default Main;
