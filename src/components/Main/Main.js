import React from "react";
import {
  Article,
  Container,
  Description,
  ShareBox,
  SharedActor,
  SharedImg,
} from "./style";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function Main() {
  return (
    <Container>
      <ShareBox>
        <div>
          <img src="/images/user.svg" alt="" />
          <button>Começar publicação</button>
        </div>

        <div>
          <button>
            <AddPhotoAlternateIcon
              style={{ color: "#0a66c2", margin: "0 4px 0 -2" }}
            />
            <span>Foto</span>
          </button>

          <button>
            <OndemandVideoIcon
              style={{ color: "#5F9B41", margin: "0 5px 0 -2" }}
            />
            <span>Video</span>
          </button>

          <button>
            <EventIcon style={{ color: "#CA8D32", margin: "0 4px 0 -2" }} />
            <span>Evento</span>
          </button>

          <button>
            <ArticleIcon style={{ color: "#E16745", margin: "0 4px 0 -2" }} />
            <span>Escrever artigo</span>
          </button>
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
          <Description>Description</Description>
          <SharedImg>
            <a href="/home">
              <img src="/images/shared-image.jpg" alt="" />
            </a>
          </SharedImg>
        </Article>
      </div>
    </Container>
  );
}

export default Main;
