import React from "react";
import styles from "./LeftPanel.module.css";
function LeftPanelChip({ playlist }) {
  return (
    <div className={styles.LeftPanelChip}>
      <div>{playlist.name}</div>
      <div>{playlist.description}</div>
    </div>
  );
}

export default LeftPanelChip;
