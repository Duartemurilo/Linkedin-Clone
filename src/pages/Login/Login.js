import React from "react";
import {
  Container,
  Form,
  Jobs,
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
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
            <h1>
              Conheça a sua nova
              <br />
              comunidade <br />
              profissional
            </h1>

            <Jobs>
              <div>
                <p>
                  Procurar emprego{" "}
                  <ArrowForwardIosIcon
                    style={{ color: "#B2B2B2", fontSize: 18 }}
                  />
                </p>
              </div>
              <div>
                <p>
                  Encontrar pessoas que voçê conhece{" "}
                  <ArrowForwardIosIcon
                    style={{ color: "#B2B2B2", fontSize: 18 }}
                  />
                </p>
              </div>
              <div>
                <p>
                  Aprender novas competências{" "}
                  <ArrowForwardIosIcon
                    style={{ color: "#B2B2B2", fontSize: 18 }}
                  />
                </p>
              </div>
            </Jobs>
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
