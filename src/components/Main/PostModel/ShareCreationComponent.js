import React from "react";
import {
  AssentsButton,
  AttachAssents,
  PostButton,
  ShareComment,
  ShareCreation,
} from "./style";

import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

function ShareCreationComponent({
  switchAssetArea,
  editorText,
  handlePost,
  shareImage,
}) {
  console.log(!!shareImage);
  return (
    <ShareCreation>
      <AttachAssents>
        <AssentsButton onClick={() => switchAssetArea("image")}>
          <ImageOutlinedIcon style={{ marginRight: 5 }} />
        </AssentsButton>
        <AssentsButton onClick={() => switchAssetArea("media")}>
          <OndemandVideoIcon style={{ marginRight: 5 }} />
        </AssentsButton>
      </AttachAssents>

      <ShareComment>
        <AssentsButton>
          <ChatBubbleOutlineIcon style={{ marginRight: 5 }} />
          Qualquer pessoa
        </AssentsButton>
      </ShareComment>
      <PostButton
        disabled={!!editorText || !!shareImage ? false : true}
        onClick={(e) => handlePost(e)}
      >
        Postar
      </PostButton>
    </ShareCreation>
  );
}

export default ShareCreationComponent;
