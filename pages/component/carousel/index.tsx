import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import styled from "@emotion/styled";
import CustomMargin from "../custom/custom-margin";

type Props = {
  list: any;
  op: "home";
};

const Carousel = ({ list, op }: Props) => {
  return (
    <SwiperContainer
      spaceBetween={20}
      slidesPerView={2}
      scrollbar={{ draggable: true }}
    >
      {list.map((item: any, index: number) => {
        return (
          <>
            {op === "home" && (
              <SwiperBox key={index}>
                <p className="name textGray700">{item.name}</p>
                <CustomMargin h={20} />
                <p className="content textGray600">{item.content}</p>
                <Circle />
              </SwiperBox>
            )}
          </>
        );
      })}
    </SwiperContainer>
  );
};

export default Carousel;

const SwiperContainer = styled(Swiper)`
  width: 100%;
  margin-left: 4rem;
`;

const SwiperBox = styled(SwiperSlide)`
  position: relative;
  height: 16rem;
  padding: 1.6rem;
  border-radius: 1rem;
  background-color: var(--gray-light);
  .name {
    z-index: 2;
    font-size: 1.2rem;
    font-weight: 700;
  }
  .content {
    z-index: 2;
    height: 9rem;
    overflow: scroll;
    font-size: 1.2rem;
    font-weight: 500;
  }
  overflow: hidden;
`;

const Circle = styled.div`
  position: absolute;
  z-index: 1;
  top: -2rem;
  right: -2rem;
  width: 14rem;
  height: 14rem;
  border-radius: 14rem;
  background: linear-gradient(
    28deg,
    rgba(101, 186, 250, 0.2) 1.58%,
    rgba(101, 186, 250, 0) 100%
  );
`;
