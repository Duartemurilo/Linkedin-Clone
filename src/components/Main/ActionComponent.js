import React from "react";

function ActionComponent({ Icon, text, color }) {
  return (
    <button>
      <Icon style={{ color: color, margin: "0 4px 0 -2" }} />
      <span>{text}</span>
    </button>
  );
}

export default ActionComponent;
