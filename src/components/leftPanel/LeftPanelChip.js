import React from "react";
import styles from "./LeftPanel.module.css";

function LeftPanelChip({ playlist, handleDragStart, id }) {
  return (
    <div
      className={styles.LeftPanelChip}
      draggable="true"
      onDragStart={() => handleDragStart({ playlist, id })}
    >
      <div>{playlist.name}</div>
      <div>{playlist.description}</div>
    </div>
  );
}

export default LeftPanelChip;
