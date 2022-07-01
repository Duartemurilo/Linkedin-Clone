import React, { useContext } from "react";
import {
  Container,
  Content,
  Logo,
  Nav,
  NavListWrap,
  Search,
  SearchIcon,
  User,
  Work,
} from "./styles";

import NavListComponent from "./NavList";
import myContext from "../../context/AppContext";

function Header() {
  const { urlUser } = useContext(myContext);

  return (
    <Container>
      <Content>
        <Logo>
          <a href="/home">
            <img src="/images/home-logo.svg" alt="" />
          </a>
        </Logo>
        <Search>
          <div>
            <input type={"text"} placeholder="Pesquisar" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavListComponent image="/images/nav-home.svg" text="Home" />
            <NavListComponent
              image="/images/nav-network.svg"
              text="Minha rede"
            />
            <NavListComponent image="/images/nav-jobs.svg" text="Vagas" />
            <NavListComponent
              image="/images/nav-messaging.svg"
              text="Mensagens"
            />
            <NavListComponent
              image="/images/nav-notifications.svg"
              text="Notificações"
            />

            <User>
              <a href="/home">
                <img
                  src={
                    !!urlUser
                      ? URL.createObjectURL(urlUser)
                      : "/images/user.svg"
                  }
                  alt=""
                />
                <img id="arrowIcon" src="/images/down-icon.svg" alt="" />
              </a>
            </User>

            <Work>
              <a href="/home">
                <img src="/images/nav-work.svg" alt="" />
                <span>Soluções</span>
              </a>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  );
}

export default Header;
