import React from "react";

function LeftPanelChip({ playlist }) {
  return (
    <div>
      <div>{playlist.name}</div>
      <div>{playlist.description}</div>
    </div>
  );
}

export default LeftPanelChip;
