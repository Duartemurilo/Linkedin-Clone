import React, { useContext } from "react";
import { ShareBox } from "./style";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import EventIcon from "@mui/icons-material/Event";
import ArticleIcon from "@mui/icons-material/Article";
import ActionComponent from "./ActionComponent";
import myContext from "../../context/AppContext";

function ShareBoxComponet({ handleClick }) {
  const { urlUser } = useContext(myContext);
  return (
    <ShareBox>
      <div>
        <img
          src={!!urlUser ? URL.createObjectURL(urlUser) : "/images/user.svg"}
          alt=""
        />
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
  );
}

export default ShareBoxComponet;
