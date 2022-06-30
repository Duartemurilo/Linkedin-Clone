import styled from "styled-components";

export const Container = styled.div`
  padding: 0;
  height: 100%;
`;

export const Nav = styled.nav`
  max-width: 1128;
  width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  flex-wrap: nowrap;

  a {
    cursor: pointer;
  }

  & > a {
    cursor: pointer;
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }

  @media screen and (max-width: 855px) {
    width: 100%;
    flex-direction: column;
    img {
      width: 100px;
      position: absolute;
      margin-left: 10px;
      left: 0;
      top: 5;
    }
  }
`;

export const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  border-radius: 20px;
  :hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;

export const Signin = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition-duration: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  :hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

export const Section = styled.div`
  display: flex;
  align-content: start;
  min-height: 700px;
  padding-bottom: 138px;
  padding-top: 40px;
  padding: 60px 0;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1128px;
  align-items: center;
  margin: auto;
  margin-top: 10vh;

  @media screen and (max-width: 855px) {
    margin: auto;
    min-height: 0px;
    height: 50vh;
  }
`;

export const Hero = styled.div`
  width: 100%;
  display: flex;
  h1 {
    padding-bottom: 0;
    width: 50%;
    font-size: 56px;
    color: #2977c9;
    font-weight: 200;
    line-height: 70px;
    @media screen and (max-width: 855px) {
      text-align: center;
      font-size: 22px;
      width: 100%;
      line-height: 2;
    }
  }
  img {
    width: 50%;
    height: 100%;
  }

  @media screen and (max-width: 855px) {
    height: 80%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5vh;
    img {
      width: 80%;
      max-width: 282px;
    }
  }
`;

export const Form = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 3vh;
`;

export const Google = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0.9);
  height: 44px;
  width: 305px;
  border: 1px solid #c8c8c8;
  cursor: pointer;
  border-radius: 20px;
  gap: 7px;
  p {
    margin: 0;
  }
  img {
    height: 25px;
    width: 25px;
    margin: 0;
  }
  @media screen and (max-width: 855px) {
    position: absolute;
    bottom: 0;
  }
`;
