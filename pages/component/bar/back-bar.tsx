import styled from "@emotion/styled";
import React from "react";
import CustomImage from "../custom/custom-image";
import CustomGap from "../custom/custom-gap";
import CustomMargin from "../custom/custom-margin";
import { useRouter } from "next/router";

const BackBar = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push("/home");
  };
  return (
    <BackBarContainer className="divColumn">
      <CustomMargin h={24} />
      <div className="divRow">
        <CustomGap w={24} />
        <CustomImage
          src="/asset/common/svg/ic-back.svg"
          op="fill"
          w={30}
          h={30}
          onClick={handleClick}
        />
      </div>
      <CustomMargin h={14} />
    </BackBarContainer>
  );
};

export default BackBar;

const BackBarContainer = styled.div``;
