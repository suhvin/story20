import CustomGap from "@/pages/component/custom/custom-gap";
import CustomImage from "@/pages/component/custom/custom-image";
import CustomMargin from "@/pages/component/custom/custom-margin";
import styled from "@emotion/styled";
import React from "react";

type Props = {
  title: string;
  caption?: string;
  isImg?: boolean;
};

const Sub = ({ title, caption, isImg = false }: Props) => {
  return (
    <SubContainer className="divPadding">
      <div className="divRow divAlignCenter">
        <p className="title textGray700">{title}</p>
        <CustomGap w={2} />
        {isImg && (
          <CustomImage src="/asset/home/png/img-memo.png" w={20} h={17} />
        )}
      </div>
      {caption && (
        <>
          <CustomMargin h={4} />
          <p className="caption textGray500">{caption}</p>
        </>
      )}
    </SubContainer>
  );
};

export default Sub;

const SubContainer = styled.div`
  .title {
    font-size: 1.8rem;
    font-weight: 700;
  }
  .caption {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
