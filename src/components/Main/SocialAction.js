import React from "react";

function SocialAction({ Icon, text, handleLike }) {
  return (
    <button onClick={() => handleLike()}>
      <Icon
        style={{
          color:
            Icon.type.render.displayName === "ThumbUpIcon"
              ? "0a66c2"
              : "#5E5E5E",
          cursor: "pointer",
        }}
      />
      <span>
        <p
          className={Icon.type.render.displayName === "ThumbUpIcon" && "active"}
        >
          {text}
        </p>
      </span>
    </button>
  );
}

export default SocialAction;
