import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import useEffectExcludingMount from "../../hooks/useEffectExcludingMount";
import { connect } from "react-redux";
import { fetchPlaylists } from "../../actions/action";
import spinner from "../../assets/spinner.gif";
import LeftPanel from "../leftPanel/LeftPanel";
import RightPanel from "../rightPanel/RightPanel";
function Main({ playlists, fetchPlaylists, loading }) {
  const [dragInfo, setDragInfo] = useState();
  const [rightPanelPlaylists, setRightPanelPlaylists] = useState([]);

  useEffect(() => {
    fetchPlaylists();
    setRightPanelPlaylists(
      JSON.parse(localStorage.getItem("rightPanelPlaylists")) || []
    );
  }, []);

  useEffectExcludingMount(() => {
    localStorage.setItem(
      "rightPanelPlaylists",
      JSON.stringify(rightPanelPlaylists)
    );
  }, [rightPanelPlaylists]);
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

  return (
    <div className={styles.main}>
      <div className={styles.header}>Playlists</div>
      <div className={styles.panels}>
        {loading ? (
          <div>
            <img src={spinner} />
          </div>
        ) : (
          <LeftPanel playlists={playlists} handleDragStart={handleDragStart} />
        )}
        <RightPanel onDrop={onDrop} rightPanelPlaylists={rightPanelPlaylists} />
      </div>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    playlists: state.playlists,
    loading: state.loading,
  };
};
const mapDispatchToProps = {
  fetchPlaylists,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
