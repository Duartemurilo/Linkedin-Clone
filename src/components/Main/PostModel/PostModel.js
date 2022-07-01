import React, { useState } from "react";
import { Container, Content } from "./style";
import HeaderComponent from "./Header";
import ShareContentComponent from "./ShareContentComponent";
import ShareCreationComponent from "./ShareCreationComponent";
import { post } from "../../../data/post";

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

  const handlePost = (e) => {
    post.unshift({
      name: "Murilo",
      userImage: "/images/eu.jpeg",
      description: editorText,
      src: !!shareImage && URL.createObjectURL(shareImage),
      info: "Desenvolvedor | Front-end | javascript | React",
      date: "agora",
      link: "https://murilo-duarte-portifolio.surge.sh/",
      like: 0,
      comments: 0,
    });

    handleClick(e);
  };

  return (
    <>
      {showModal === "open" && (
        <Container>
          <Content>
            <HeaderComponent reset={reset} />
            <ShareContentComponent
              editorText={editorText}
              setEditorText={setEditorText}
              assetArea={assetArea}
              handleChange={handleChange}
              shareImage={shareImage}
              videoLink={videoLink}
              setVideoLink={setVideoLink}
            />
            <ShareCreationComponent
              switchAssetArea={switchAssetArea}
              editorText={editorText}
              handlePost={handlePost}
              shareImage={shareImage}
            />
          </Content>
        </Container>
      )}
    </>
  );
}

export default PostModel;
