import CustomImage from "@/pages/component/custom/custom-image";
import CustomMargin from "@/pages/component/custom/custom-margin";
import Toast from "@/pages/component/toast";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import React, { useState } from "react";

enum Option {
  POSTING = "posting",
  CALENDAR = "calendar",
}

const OPTION_VALUE = {
  [Option.POSTING]: {
    src: "/asset/home/png/img-posting.png",
    title: "Posting",
    desc: "모든 미션을<br/>확인할 수 있어요",
    url: "/posting",
  },

  [Option.CALENDAR]: {
    src: "/asset/home/png/img-calendar.png",
    title: "Calendar",
    desc: "이번 기수 일정을<br/>확인할 수 있어요",
    url: "",
  },
};

type Props = {
  op: "posting" | "calendar";
};

const BoxButton = ({ op }: Props) => {
  const optionValue = OPTION_VALUE[op];

  const router = useRouter();

  const handleClick = (url: string) => {
    if (url !== "") {
      router.push(url);
    } else {
      console.log("아직 준비중입니다!");
      setIsToast(true);
    }
  };

  // toast 관련
  const [isToast, setIsToast] = useState(false);

  return (
    <BoxButtonContainer onClick={() => handleClick(optionValue.url)}>
      <CustomImage src={optionValue.src} w={34} h={37} />
      <CustomMargin h={8} />
      <p className="title">{optionValue.title}</p>
      <CustomMargin h={4} />
      <p
        className="desc"
        dangerouslySetInnerHTML={{
          __html: optionValue.desc,
        }}
      />
      {isToast && (
        <Toast
          op="error"
          title={"아직 준비중입니다!"}
          handleClose={() => setIsToast(false)}
          time={2000}
        />
      )}
    </BoxButtonContainer>
  );
};

export default BoxButton;

const BoxButtonContainer = styled.div`
  width: 47%;
  height: 14rem;
  padding: 2rem 1.6rem 1.2rem 1.6rem;
  border-radius: 1.5rem;
  background: linear-gradient(
    360deg,
    #52b4fe 41.92%,
    rgba(145, 178, 255, 0.87) 78.39%,
    rgba(183, 177, 255, 0.7) 100%
  );
  box-shadow: 0px 2px 4px 2px rgba(102, 182, 254, 0.15);
  .title {
    color: white;
    font-size: 1.5rem;
    font-weight: 900;
  }
  .desc {
    color: white;
    font-size: 1rem;
    font-weight: 500;
  }
`;
