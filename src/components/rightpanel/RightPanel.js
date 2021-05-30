import React from "react";
import styles from "./RightPanel.module.css";
import uuid from "react-uuid";
import RightPanelChip from "./RightPanelChip";
function RightPanel({ onDrop, rightPanelPlaylists }) {
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const showPlaylists = () => {
    if (rightPanelPlaylists.length === 0) {
      return <div>No Drag Playlists Found</div>;
    }
    return rightPanelPlaylists.map((rightPanelPlaylist, index) => (
      <RightPanelChip playlist={rightPanelPlaylist} key={index + 1} />
    ));
  };
  return (
    <div
      className={styles.rightPanel}
      onDragOver={handleDragOver}
      onDrop={() => onDrop(uuid())}
    >
      {showPlaylists()}
    </div>
  );
}

export default RightPanel;
