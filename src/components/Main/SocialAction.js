import React from "react";

function SocialAction({ Icon, text }) {
  return (
    <button>
      <Icon style={{ color: "#5E5E5E", cursor: "pointer" }} />
      <span>
        <p>{text}</p>
      </span>
    </button>
  );
}

export default SocialAction;
