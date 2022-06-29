import React from "react";
import {
  Avatar,
  Container,
  FeedList,
  FollowCard,
  Title,
  Recommendation,
  BannerCard,
} from "./style";

function RightSide() {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Adicionar a seu feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <a href="/home">
              <Avatar />
            </a>
            <div>
              <span>#Linkedin</span>
            </div>
          </li>
          <li>
            <a href="/home">
              <Avatar />
            </a>
            <div>
              <span>#Video</span>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          Veja suas recomendações
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </BannerCard>
    </Container>
  );
}

export default RightSide;
