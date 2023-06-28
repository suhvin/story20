import CustomMargin from "@/pages/component/custom/custom-margin";
import Toast from "@/pages/component/toast";
import styled from "@emotion/styled";
import React, { useState } from "react";

type Props = {
  numList: number[];
  num: number;
};

const TabBox = ({ numList, num }: Props) => {
  // toast 관련
  const [isToast, setIsToast] = useState(false);

  const handleClick = (num: number) => {
    if (num !== 25) {
      setIsToast(true);
    }
  };

  return (
    <TabBoxContainer>
      {numList.map((item: any, index: number) => {
        return (
          <Tab key={index}>
            <p
              className={item === num ? "textPrimary" : "textGray300"}
              onClick={() => handleClick(item)}
            >
              {item}
            </p>
            <CustomMargin h={2} />
            {item === num && <Dot />}
          </Tab>
        );
      })}
      {isToast && (
        <Toast
          op="error"
          title={"아직 준비중입니다!"}
          handleClose={() => setIsToast(false)}
          time={2000}
        />
      )}
    </TabBoxContainer>
  );
};

export default TabBox;

const TabBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tab = styled.div`
  width: 2.4rem;
  margin-right: 4rem;
  display: flex;
  flex-direction: column;

  p {
    font-size: 1.8rem;
    font-weight: 900;
    text-align: center;
  }
`;

const Dot = styled.div`
  width: 0.4rem;
  height: 0.4rem;
  margin: 0 auto;
  border-radius: 50%;
  background-color: var(--primary);
`;
