import React from "react";
import {
  Container,
  Form,
  Google,
  Hero,
  Join,
  Nav,
  Section,
  Signin,
} from "./styles";

import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../Routes/Path.tsx";
import { connect } from "react-redux";
import { signInApi } from "../../actions/index";

function Login(props) {
  const navigate = useNavigate();

  return (
    <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join>cadastre-se agora</Join>
          <Signin onClick={() => goToHomePage(navigate)}>Entrar</Signin>
        </div>
      </Nav>
      <Section>
        <Hero>
          <Form>
            <h1>Conheça a sua nova comunidade profissional</h1>

            <Google>
              <img src="/images/google.svg" alt="" />
              <p> Entre com o Google</p>
            </Google>
          </Form>

          <img src="/images/hero-banner.svg" alt="" />
        </Hero>
      </Section>
    </Container>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispachToProps = (dispatch) => ({
  signIn: () => dispatch(signInApi()),
});

export default connect(mapStateToProps, mapDispachToProps)(Login);
