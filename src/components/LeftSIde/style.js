import styled from "styled-components";
import NavListComponent from "../Header/NavList";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 70%;

  @media (max-width: 768px) {
    height: auto;
    width: 90%;
    margin: 0;
    .active {
      display: none;
    }
  }
`;

export const ShowMore = styled.div`
  display: none;
  @media (max-width: 768px) {
    display: flex;
    font-size: 14px;
    color: #00000099;
    justify-content: center;
    border-top: 1px solid rgba(0, 0, 0, 0.15);
    align-items: center;
    height: 10vh;
    gap: 5px;
    img {
      width: 10px;
      height: 10px;
    }
  }
`;

export const ArtCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 49%;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  justify-content: space-between;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  height: 100%;
  word-wrap: break-word;
  word-break: break-word;
`;

export const CardBackground = styled.div`
  background: url("/images/background.jpeg");
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-position: center;
  background-size: 462px;
  height: 54px;
  width: 100%;
`;

export const Photo = styled.div`
  box-shadow: none;
  background-image: url("/images/eu.jpeg");
  width: 72px;
  height: 72px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
`;

export const Link = styled.div`
  font-size: 16px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.9);
  font-weight: 600;
  font-style: none;
`;

export const PhotoText = styled.div`
  color: rgba(0, 0, 0, 0.6);
  margin-top: 4px;
  font-size: 12px;
  line-height: 1.33;
  font-weight: 400;
`;

export const Widget = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.08);
    }
    div {
      display: flex;
      flex-direction: column;
      text-align: left;
      span {
        font-size: 12px;
        line-height: 1.5;
        color: rgba(0, 0, 0, 1);
        &:first-child {
          color: rgba(0, 0, 0, 0.6);
        }
        &:last-child {
          color: rgba(0, 0, 0, 0.6);
        }
      }
    }
  }
  svg {
    color: rgba(0, 0, 0, 1);
  }
`;

export const Item = styled.a`
  border-color: rgba(0, 0, 0, 0.8);
  text-align: left;
  padding: 12px;
  font-size: 12px;
  display: flex;
  align-items: center;
  height: 5%;
  cursor: pointer;
  span {
    display: flex;
    align-items: center;
    color: rgba(0, 0, 0, 1);
    svg {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
  }
`;

export const CommunityCard = styled.div`
  padding: 8px 0 0;
  justify-content: space-between;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
  height: 15vh;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  a {
    color: black;
    text-decoration: none;
    padding: 4px 12px 4px 12px;
    font-size: 12px;
    &:hover {
      color: #0a66c2;
    }
    span {
      display: flex;
      align-items: center;
      justify-content: space-between;
      color: #0a66c2;
    }
    &:last-child {
      color: rgba(0, 0, 0, 1);
      text-decoration: none;
      border-top: 1px solid #d6cec2;
      padding: 12px;
      height: 20px;

      &:hover {
        background-color: rgba(0, 0, 0, 0.08);
      }

      .showMore {
        display: flex;
        justify-content: center;
        color: rgba(0, 0, 0, 0.6);
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
`;
