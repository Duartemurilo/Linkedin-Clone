import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  z-index: 100;
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0, 0.8);
  height: 53px;
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
  @media (max-width: 768px) {
    width: 80%;

    justify-content: center;
  }
`;

export const Logo = styled.div`
  margin-right: 8px;
  font-size: 0px;
`;

export const Search = styled.div`
  width: 100px;
  opacity: 1;
  position: relative;
  flex-grow: 1;
  & > div {
    max-width: 280px;
    input {
      box-shadow: none;
      border: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

export const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s;
`;

export const Nav = styled.nav`
  margin-left: auto;
  display: block;
  display: flex;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 100%;
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

export const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  height: 48px;
  max-height: 48px;
  .active {
    border-bottom: 2px solid black;

    span:after {
      content: "";
      position: absolute;
      transition: transform 0.2s ease-in-out;
      width: 100%;
      transform: scaleX(1);
      bottom: 0;
      left: 0;
    }
  }
`;

export const NavList = styled.li`
  display: flex;
  align-items: center;
  a {
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-width: 42px;
    min-width: 80px;
    position: relative;
    text-decoration: none;
    align-items: center;
    background: transparent;
    span {
      display: flex;
      align-items: center;
      color: rgba(0, 0, 0, 0.6);
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }

  :hover,
  :active {
    a {
      span {
        color: rgba(0, 0, 0, 0.9);
      }
    }
  }
`;

export const User = styled(NavList)`
  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    object-fit: cover;
  }
  #arrowIcon {
    width: 12px;
    height: 12px;
  }
  span {
    display: flex;
    align-items: center;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Work = styled(User)`
  border-left: 1px solid rgba(0, 0, 0, 0.08);
`;
