import React, { useState, useEffect } from "react";
import { Container } from "./style";
import PostModel from "./PostModel/PostModel";
import ShareBoxComponet from "./ShareBoxComponet";
import CardPost from "./CardPost";
import { post } from "../../data/post";

function Main() {
  const [showModal, setShowModal] = useState("close");
  const [currentPost, setCurrentPost] = useState();

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

  useEffect(() => {
    setCurrentPost(post);
  }, []);

  return (
    <Container>
      <ShareBoxComponet handleClick={handleClick} />
      {currentPost?.map(
        (
          {
            name,
            src,
            date,
            description,
            link,
            like,
            comments,
            info,
            userImage,
          },
          index
        ) => (
          <CardPost
            name={name}
            userImage={userImage}
            src={src}
            date={date}
            info={info}
            description={description}
            link={link}
            like={like}
            comments={comments}
            index={index}
          />
        )
      )}

      <PostModel showModal={showModal} handleClick={handleClick} />
    </Container>
  );
}

export default Main;
