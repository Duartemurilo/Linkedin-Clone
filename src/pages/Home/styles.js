import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 0;
  padding-top: 65px;
  height: 100vh;
  max-width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: start;
    height: 100vh;
  }
`;

export const Containt = styled.div`
  max-width: 1128px;
  margin-left: auto;
  margin-right: auto;
`;

export const Layout = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1128px;
  margin: 25px 0;

  @media (max-width: 768px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 5vh;
    overflow-x: hidden;
    align-items: center;
    height: auto;
  }
`;
