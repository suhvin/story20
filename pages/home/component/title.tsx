import CustomImage from "@/pages/component/custom/custom-image";
import styled from "@emotion/styled";
import React from "react";

const Title = () => {
  return (
    <TitleContainer className="divRow divJustifyBetween divPadding">
      <p className="title textGray700">
        대학생 연합
        <br />
        기획 동아리 드림스타트
      </p>
      <Highlight />
      <CustomImage src="/asset/home/png/img-whale.png" w={61} h={54} />
    </TitleContainer>
  );
};

export default Title;

const TitleContainer = styled.div`
  position: relative;
  width: 100%;
  .title {
    z-index: 2;
    font-family: Pretendard;
    font-size: 2rem;
    font-weight: 800;
  }
`;

const Highlight = styled.div`
  position: absolute;
  z-index: 1;
  left: 13.5rem;
  bottom: 0.6rem;
  width: 8.6rem;
  height: 1.6rem;
  background-color: var(--primary);
  opacity: 0.3;
`;
