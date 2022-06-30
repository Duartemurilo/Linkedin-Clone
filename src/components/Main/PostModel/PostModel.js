import React, { useState } from "react";
import {
  AssentsButton,
  AttachAssents,
  Container,
  Content,
  Editor,
  Header,
  PostButton,
  ShareComment,
  ShareCreation,
  SharedContent,
  UploadImage,
  UserInfo,
} from "./style";
import CloseIcon from "@mui/icons-material/Close";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReactPlayer from "react-player";

function PostModel({ showModal, handleClick }) {
  const [editorText, setEditorText] = useState("");
  const [shareImage, setShareImage] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [assetArea, setAssetArea] = useState("");

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not a image, the file is a${typeof image}`);
      return;
    }

    setShareImage(image);
  };

  const switchAssetArea = (area) => {
    setShareImage("");
    setVideoLink("");
    setAssetArea(area);
  };

  const reset = (e) => {
    setShareImage("");
    setVideoLink("");
    setEditorText("");
    setAssetArea("");
    handleClick(e);
  };
  return (
    <>
      {showModal === "open" && (
        <Container>
          <Content>
            <Header>
              <h2>Create a post</h2>
              <button
                onClick={(event) => reset(event)}
                style={{ cursor: "pointer" }}
              >
                <CloseIcon style={{ color: "#5E5E5E" }} />
              </button>
            </Header>
            <SharedContent>
              <UserInfo>
                <img src="/images/user.svg" alt="" />
                <span>Murilo</span>
              </UserInfo>

              <Editor>
                <textarea
                  value={editorText}
                  onChange={(e) => setEditorText(e.target.value)}
                  placeholder="No que você está pensando"
                  autoFocus={true}
                />
                {assetArea === "image" ? (
                  <UploadImage>
                    <input
                      type="file"
                      accept="image/gif image/jpeg image/png"
                      name="image"
                      id="file"
                      style={{ display: "none" }}
                      onChange={handleChange}
                    />
                    <p>
                      <label htmlFor="file" style={{ cursor: "pointer" }}>
                        Selecione uma umagem para compartilhar
                      </label>
                    </p>
                    {shareImage && (
                      <img src={URL.createObjectURL(shareImage)} alt="" />
                    )}
                  </UploadImage>
                ) : (
                  assetArea === "media" && (
                    <>
                      <input
                        className="inputvideo"
                        type="text"
                        placeholder="Por favor insira o link do video"
                        value={videoLink}
                        onChange={(e) => setVideoLink(e.target.value)}
                      />
                      {videoLink && (
                        <ReactPlayer width={"100%"} url={videoLink} />
                      )}
                    </>
                  )
                )}
              </Editor>
            </SharedContent>
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
              <PostButton disabled={!editorText ? true : false}>
                Postar
              </PostButton>
            </ShareCreation>
          </Content>
        </Container>
      )}
    </>
  );
}

export default PostModel;
