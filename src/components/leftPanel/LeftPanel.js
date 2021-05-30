import React from "react";
import styles from "./LeftPanel.module.css";
import LeftPanelChip from "./LeftPanelChip";
function LeftPanel({ playlists }) {
  const showPlaylists = () => {
    return playlists.map((playlist, index) => (
      <LeftPanelChip playlist={playlist} key={index + 1} />
    ));
  };
  return <div className={styles.LeftPanel}>{showPlaylists()}</div>;
}

export default LeftPanel;
