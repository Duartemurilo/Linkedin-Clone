import React from "react";
import Header from "../../components/Header/Header";
import Left from "../../components/LeftSide/Left";
import Main from "../../components/Main/Main";
import RightSide from "../../components/RightSide/RightSide";
import { Container, Layout } from "./styles";

function Home() {
  return (
    <Container>
      <Header />
      <Layout>
        <Left />
        <Main />
        <RightSide />
      </Layout>
    </Container>
  );
}

export default Home;
