import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const FollowCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: hidden;
  margin-bottom: 8px;
  background-color: #fff;
  border-radius: 8px;
  border: none;
  box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
  padding: 12px;
`;

export const Title = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  font-size: 16px;
  width: 100%;
  color: rgba(0, 0, 0, 1);
`;

export const FeedList = styled.ul`
  margin-top: 16px;
  li {
    display: flex;
    align-items: center;
    margin: 12px 0;
    font-size: 14px;
    & > div {
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
    span {
      color: #0a66c2;
      cursor: pointer;
    }
  }
`;

export const Avatar = styled.div`
  background-image: url("https://static-exp1.licdn.com/sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 48px;
  height: 48px;
  margin-right: 8px;
`;

export const Recommendation = styled.a`
  color: #0a66c2;
  display: flex;
  align-items: center;
  font-size: 14px;
  cursor: pointer;
`;

export const BannerCard = styled(FollowCard)`
  img {
    width: 100%;
    height: 100%;
  }
`;
