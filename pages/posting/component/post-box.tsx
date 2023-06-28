import CustomGap from "@/pages/component/custom/custom-gap";
import CustomImage from "@/pages/component/custom/custom-image";
import CustomMargin from "@/pages/component/custom/custom-margin";
import { convertDate } from "@/util/common/func/convert-date";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  postingList: any[];
};

const PostBox = ({ postingList }: Props) => {
  // 페이지 이동
  const router = useRouter();
  const handleClick = (date: string) => {
    router.push({
      pathname: "posting/info",
      query: { date: date },
    });
  };

  return (
    <PostBoxContainer>
      {postingList.map((item: any, index: number) => {
        return (
          <Post key={index}>
            <div className="divRow">
              <Date className="divColumn">
                <div
                  className={`dotted-line ${index === 0 ? "first" : "top"}`}
                />
                <p className="month textGray500">
                  {convertDate(item.date, "month")}
                </p>
                <p className="day textPrimary">
                  {convertDate(item.date, "day")}
                </p>
                <div
                  className={`dotted-line ${
                    index === postingList.length - 1 ? "last" : "bottom"
                  }`}
                />
              </Date>
              <CustomGap w={24} />
              <div className="divColumn" style={{ width: "100%" }}>
                <Card onClick={() => handleClick(item.date)}>
                  <CustomImage
                    src={item.mainImgSrc}
                    isWidth100={true}
                    isHeight100={true}
                  />
                  <Overlay />
                  <p className="title">{item.title}</p>
                  <p className="teamName">{item.teamName}</p>
                </Card>
                <CustomMargin h={24} />
              </div>
            </div>
          </Post>
        );
      })}
    </PostBoxContainer>
  );
};

export default PostBox;

const PostBoxContainer = styled.div``;

const Date = styled.div`
  width: 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  .dotted-line {
    border-left: 0.1rem dotted var(--gray-200);
  }
  .top {
    height: 1.5rem;
  }
  .bottom {
    height: 100%;
  }
  .last {
    height: 60%;
  }
  .first {
    height: 1.5rem;
    border-color: transparent;
  }
`;

const Post = styled.div`
  .month {
    font-size: 1.3rem;
    font-weight: 900;
  }
  .day {
    font-size: 1.3rem;
    font-weight: 700;
  }
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  //   height: 0;
  //   padding-bottom: 60%;
  border-radius: 1.5rem;
  background-color: white;
  box-shadow: 0rem 0.1rem 0.8rem var(--black-10);
  overflow: hidden;
  .title {
    position: absolute;
    bottom: 3.6rem;
    left: 1.8rem;
    color: white;
    font-size: 1.6rem;
    font-weight: 900;
  }
  .teamName {
    position: absolute;
    bottom: 2rem;
    left: 1.8rem;
    color: white;
    font-size: 1rem;
    font-weight: 500;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.7) 100%
  );
`;
