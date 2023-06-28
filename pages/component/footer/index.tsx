import styled from "@emotion/styled";
import React from "react";
import CustomMargin from "../custom/custom-margin";
import CustomImage from "../custom/custom-image";
import CustomGap from "../custom/custom-gap";
import makeLink from "@/public/data/link";

const Footer = () => {
  return (
    <FooterContainer>
      <CustomMargin h={30} />
      <BtnBox className="divRow">
        <CustomImage
          src="/asset/common/png/btn-cafe.png"
          w={20}
          h={20}
          onClick={() => makeLink("cafe")}
        />
        <CustomGap w={8} />
        <CustomImage
          src="/asset/common/png/btn-youtube.png"
          w={20}
          h={20}
          onClick={() => makeLink("youtube")}
        />
        <CustomGap w={8} />
        <CustomImage
          src="/asset/common/png/btn-insta.png"
          w={20}
          h={20}
          onClick={() => makeLink("insta")}
        />
      </BtnBox>
      <CustomMargin h={10} />
      <p className="text textBlack36">Made By, Suhvin / Yejin</p>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 10rem;
  padding: 0 3rem;
  .text {
    font-size: 1.1rem;
    font-weight: 300;
    text-align: right;
  }
`;

const BtnBox = styled.div`
  height: 2rem;
  justify-content: right;
`;
