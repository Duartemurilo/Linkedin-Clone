import React, { useContext } from "react";
import { useState } from "react";
import myContext from "../../context/AppContext";

import {
  PhotoText,
  ArtCard,
  CardBackground,
  CommunityCard,
  Container,
  Item,
  Link,
  Photo,
  ShowMore,
  UserInfo,
  Widget,
} from "./style";

function Left(props) {
  const [hide, setHide] = useState(true);
  const { urlUser, setUrlUser } = useContext(myContext);

  const handleChange = (e) => {
    const image = e.target.files[0];

    if (image === "" || image === undefined) {
      alert(`not a image, the file is a${typeof image}`);
      return;
    }

    setUrlUser(image);
  };

  console.log(urlUser);
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />

          {!urlUser ? (
            <Photo>
              <img src="/images/user.svg" alt="" />
              <input
                type="file"
                accept="image/gif image/jpeg image/png"
                name="image"
                id="file"
                onChange={handleChange}
              />
            </Photo>
          ) : (
            <Photo>
              <img src={URL.createObjectURL(urlUser)} alt="" />
              <input
                type="file"
                accept="image/gif image/jpeg image/png"
                name="image"
                id="file"
                onChange={handleChange}
              />
            </Photo>
          )}

          <Link>Bem vindo!</Link>
          <PhotoText>Desenvolvedor | Front-end | javascript | React</PhotoText>
        </UserInfo>
        <ShowMore onClick={() => setHide(!hide)}>
          Exibir {!hide ? "menos" : "mais"}
          {!hide ? (
            <img src="/images/navigate-up-arrow.png" alt="" />
          ) : (
            <img src="/images/arrow-down-sign-to-navigate.png" alt="" />
          )}
        </ShowMore>

        <Widget className={!!hide && "active"}>
          <a href="/home">
            <div>
              <span>Conexões</span>
              <span>Amplie sua rede</span>
              <span>Quem viu seu perfil</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </a>
        </Widget>
        <Item className={!!hide && "active"}>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            Meus itens
          </span>
        </Item>
      </ArtCard>

      <CommunityCard className={!!hide && "active"}>
        <a href="/home">
          <span>Grupos</span>
        </a>
        <a href="/home">
          <span>
            Eventos
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </a>
        <a href="/home">
          <span>Hashtags seguidas</span>
        </a>
        <a href="/home">
          <span className="showMore">Descubra mais</span>
        </a>
      </CommunityCard>
    </Container>
  );
}

export default Left;
