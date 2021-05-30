import React from "react";
import styles from "./LeftPanel.module.css";
import LeftPanelChip from "./LeftPanelChip";
import uuid from "react-uuid";
function LeftPanel({ playlists, handleDragStart }) {
  const id = uuid();
  const showPlaylists = () => {
    return playlists.map((playlist, index) => (
      <LeftPanelChip
        playlist={playlist}
        key={index + 1}
        handleDragStart={handleDragStart}
        id={id}
      />
    ));
  };
  return <div className={styles.LeftPanel}>{showPlaylists()}</div>;
}

export default LeftPanel;
