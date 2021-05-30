import React from "react";
import styles from "./RightPanel.module.css";
function RightPanelChip({ playlist }) {
  return (
    <div className={styles.RightPanelChip}>
      <div>{playlist.name}</div>
      <div>{playlist.description}</div>
    </div>
  );
}

export default RightPanelChip;
