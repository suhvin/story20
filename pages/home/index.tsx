import { setControl } from "@/store/control";
import styled from "@emotion/styled";
import React from "react";
import { useDispatch } from "react-redux";
import CustomImage from "../component/custom/custom-image";
import Overlay from "../component/overlay";
import CustomMargin from "../component/custom/custom-margin";
import Title from "./component/title";
import BoxButton from "./component/box-button";
import CustomGap from "../component/custom/custom-gap";
import Sub from "./component/sub";
import Carousel from "../component/carousel";
import ListBox from "./component/list-box";
import Footer from "../component/footer";

const HomePage = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setControl("test", 2));
  };

  return (
    <HomeContainer>
      <div style={{ position: "relative", height: "100%" }}>
        <CustomImage
          src="/asset/home/png/img-main.png"
          isWidth100={true}
          isHeight100={true}
        />
        <Overlay op="white" />
      </div>
      <CustomMargin h={24} />
      <Title />
      <CustomMargin h={36} />
      <div className="divRow divJustifyBetween divPadding">
        <BoxButton op="posting" />
        <CustomGap w={20} />
        <BoxButton op="calendar" />
      </div>
      <CustomMargin h={64} />
      <Sub
        title="동아리원들의 후기"
        caption="지난 기수 드스인들의 후기가 궁금하다면?"
        isImg={true}
      />
      <CustomMargin h={24} />
      <Carousel
        op="home"
        list={[
          {
            name: "24기 회원",
            content:
              "인생 첫 동아리였는데 어쩌다보니 3기수까지 하게 된 마성의 드스..... 드스에서 좋은 친구들도 많이 사귀고 추억도 많이 쌓았어요. 드스 최고!! 사랑해요~~",
          },
        ]}
      />
      <CustomMargin h={64} />
      <GrayBox>
        <CustomMargin h={20} />
        <Sub title="드림스타트는 어떤 동아리일까?" />
        <CustomMargin h={20} />
        <ListBox
          list={[
            {
              icon: 1,
              text: "2022 아웃 캠퍼스 x 대학 내일 명품 동아리 TOP 10",
            },
            {
              icon: 2,
              text: "2021 AEISEC YouthSpeakForum 파트너쉽 협약",
            },
            {
              icon: 3,
              text: "2021 카카오워크 유니브 파트너 선정",
            },
            {
              icon: 4,
              text: "네이버 밴드 동아리 서포터즈 2기 수료",
            },
            {
              icon: 1,
              text: "2020 롯데칠성 로켓 음료학교 서포터즈 동아리 선정",
            },
            {
              icon: 2,
              text: "2019 Univ Expo 최우수 동아리 선정",
            },
            {
              icon: 3,
              text: "2017 Univ Expo 최우수 동아리 선정",
            },
            {
              icon: 4,
              text: "대학생활박람회 Univ Expo 7회 연속 참가",
            },
          ]}
          op="home"
        />
      </GrayBox>
      <Footer />
    </HomeContainer>
  );
};

export default HomePage;

const HomeContainer = styled.div``;

const GrayBox = styled.div`
  background-color: var(--gray-light);
  height: 30rem;
  overflow: scroll;
`;
