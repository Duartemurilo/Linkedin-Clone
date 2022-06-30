import React from "react";

function SocialCount() {
  return (
    <>
      <li>
        <button>
          <img src="/images/like.svg" alt="" />
          <img src="/images/coracao.svg" alt="" />
          <img src="/images/clap.svg" alt="" />

          <span>75</span>
        </button>
      </li>
      <li>
        <a href="/home">2 comentarios</a>
      </li>
    </>
  );
}

export default SocialCount;
