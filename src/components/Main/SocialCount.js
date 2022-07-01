import React from "react";

function SocialCount({ value, comments }) {
  return (
    <>
      <li>
        <button>
          <img src="/images/like.svg" alt="" />
          <img src="/images/coracao.svg" alt="" />
          <img src="/images/clap.svg" alt="" />

          <span>{value}</span>
        </button>
      </li>
      <li>
        <a href="/home">{comments} comentarios</a>
      </li>
    </>
  );
}

export default SocialCount;
