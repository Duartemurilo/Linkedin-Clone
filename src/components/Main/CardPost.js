import React, { useState } from "react";
import {
  Article,
  Description,
  SharedActor,
  SharedImg,
  SocialActions,
  SocialCounts,
} from "./style";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SocialAction from "./SocialAction";
import SocialCount from "./SocialCount";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

function CardPost({
  name,
  src,
  info,
  date,
  description,
  link,
  like,
  comments,
  userImage,
}) {
  const [currentLike, setLike] = useState(like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (!isLiked) {
      setLike(currentLike + 1);
      setIsLiked(true);
    } else if (!!isLiked) {
      setLike(currentLike - 1);
      setIsLiked(false);
    }
  };

  return (
    <Article>
      <SharedActor>
        <a href="/home">
          <img src={userImage} alt="" />
          <div>
            <span>{name}</span>
            <span className="info">{info}</span>
            <span className="info">{date}</span>
          </div>
        </a>
        <button>
          <MoreHorizIcon />
        </button>
      </SharedActor>
      <Description>{description}</Description>
      <SharedImg>
        <a href={link} title="Ver aplicação" target="_blank" rel="noreferrer">
          {src && <img src={src} alt="" />}
        </a>
      </SharedImg>

      <SocialCounts>
        <SocialCount value={currentLike} comments={comments} />
      </SocialCounts>

      <SocialActions>
        <SocialAction
          Icon={!isLiked ? ThumbUpOutlinedIcon : ThumbUpIcon}
          text="Like"
          handleLike={handleLike}
        />
        <SocialAction Icon={ChatBubbleOutlineOutlinedIcon} text="Comentar" />
        <SocialAction Icon={SendIcon} text="Enviar" />
        <SocialAction Icon={ShareIcon} text="Compartilhar" />
      </SocialActions>
    </Article>
  );
}

export default CardPost;
