import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
  height: 240vh;
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
  height: 300px;
  width: 100%;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  justify-content: space-between;
  background-color: white;
  @media (max-width: 768px) {
    height: 100%;
  }
`;

export const UserInfo = styled.div`
  width: 100%;
  height: auto;
  min-height: 160px;
  word-wrap: break-word;
  word-break: break-word;
`;

export const CardBackground = styled.div`
  background: url("/images/card-bg.svg");
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-position: center;
  background-size: 462px;
  height: 54px;
  width: 100%;
`;

export const Photo = styled.div`
  box-shadow: none;
  width: 72px;
  height: 72px;
  border: 2px solid white;
  margin: -38px auto 12px;
  border-radius: 50%;
  position: relative;
  img {
    object-fit: cover;
    width: inherit;
    height: inherit;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
  }
  input {
    z-index: 2;
    cursor: pointer;
    width: inherit;
    height: inherit;
    background-color: red;
    border-radius: inherit;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;
  }
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
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  min-height: 80px;
  & > a {
    text-decoration: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 12px;
    padding-right: 12px;
    height: 100%;
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
  min-height: 38px;
  padding-left: 12px;
  font-size: 12px;
  display: flex;
  align-items: center;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  height: 100%;
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
  position: sticky;
  top: 70px;
  background-color: white;
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
      display: flex;
      align-items: center;
      justify-content: center;
      height: 28px;

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
