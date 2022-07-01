import React from "react";
import { Editor, SharedContent, UploadImage, UserInfo } from "./style";
import ReactPlayer from "react-player";

function ShareContentComponent({
  editorText,
  setEditorText,
  assetArea,
  handleChange,
  shareImage,
  videoLink,
  setVideoLink,
}) {
  return (
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
            {shareImage && <img src={URL.createObjectURL(shareImage)} alt="" />}
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
              {videoLink && <ReactPlayer width={"100%"} url={videoLink} />}
            </>
          )
        )}
      </Editor>
    </SharedContent>
  );
}

export default ShareContentComponent;
