import React, { useState } from "react";
import {
  Article,
  Container,
  Description,
  ShareBox,
  SharedActor,
  SharedImg,
  SocialActions,
  SocialCounts,
} from "./style";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ShareIcon from "@mui/icons-material/Share";
import SendIcon from "@mui/icons-material/Send";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import SocialAction from "./SocialAction";
import ActionComponent from "./ActionComponent";
import SocialCount from "./SocialCount";
import PostModel from "./PostModel/PostModel";

function Main() {
  const [showModal, setShowModal] = useState("close");

  const handleClick = (e) => {
    e.preventDefault();

    switch (showModal) {
      case "open":
        setShowModal("close");
        break;
      case "close":
        setShowModal("open");
        break;
      default:
        setShowModal("close");
        break;
    }
  };
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button onClick={handleClick}>Começar publicação</button>
        </div>

        <div>
          <ActionComponent
            Icon={AddPhotoAlternateIcon}
            text="Foto"
            color="#0a66c2"
          />
          <ActionComponent
            Icon={OndemandVideoIcon}
            text="Video"
            color="#5F9B41"
          />
          <ActionComponent Icon={EventIcon} text="Evento" color="#CA8D32" />
          <ActionComponent
            Icon={ArticleIcon}
            text="Escrever Artigo"
            color="#E16745"
          />
        </div>
      </ShareBox>

      <div>
        <Article>
          <SharedActor>
            <a href="h/ome">
              <img src="/images/user.svg" alt="" />
              <div>
                <span>Title</span>
                <span>Info</span>
                <span>Date</span>
              </div>
            </a>
            <button>
              <MoreHorizIcon />
            </button>
          </SharedActor>
          <Description>Descrição</Description>
          <SharedImg>
            <a href="/home">
              <img src="/images/shared-image.jpg" alt="" />
            </a>
          </SharedImg>

          <SocialCounts>
            <SocialCount />
          </SocialCounts>

          <SocialActions>
            <SocialAction Icon={ThumbUpOutlinedIcon} text="Like" />
            <SocialAction
              Icon={ChatBubbleOutlineOutlinedIcon}
              text="Comentar"
            />
            <SocialAction Icon={SendIcon} text="Enviar" />
            <SocialAction Icon={ShareIcon} text="Compartilhar" />
          </SocialActions>
        </Article>
      </div>
      <PostModel showModal={showModal} handleClick={handleClick} />
    </Container>
  );
}

export default Main;
