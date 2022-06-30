import React from "react";
import { useState } from "react";
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

  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />

          <Photo />
          <Link>Murilo Duarte Martins</Link>
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
