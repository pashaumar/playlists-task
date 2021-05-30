import React from "react";
import LeftPanelChip from "./LeftPanelChip";
function LeftPanel({ playlists }) {
  const showPlaylists = () => {
    return playlists.map((playlist, index) => (
      <LeftPanelChip playlist={playlist} key={index + 1} />
    ));
  };
  return <div>{showPlaylists()}</div>;
}

export default LeftPanel;
