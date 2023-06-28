import CustomGap from "@/pages/component/custom/custom-gap";
import CustomImage from "@/pages/component/custom/custom-image";
import CustomMargin from "@/pages/component/custom/custom-margin";
import styled from "@emotion/styled";
import React from "react";

const iconList = [
  "/asset/home/png/img-pin.png",
  "/asset/home/png/img-star.png",
  "/asset/home/png/img-clova.png",
  "/asset/home/png/img-ball.png",
];

type Props = {
  list: any;
  op: "home";
};

const ListBox = ({ list, op }: Props) => {
  return (
    <ListBoxContainer>
      {list.map((item: any, index: number) => {
        return (
          <>
            {op === "home" && (
              <>
                <List key={index}>
                  <CustomImage src={iconList[item.icon - 1]} w={24} h={22} />
                  <CustomGap w={12} />
                  <p className="text textBlack36">{item.text}</p>
                </List>
                <CustomMargin h={12} />
              </>
            )}
          </>
        );
      })}
    </ListBoxContainer>
  );
};

export default ListBox;

const ListBoxContainer = styled.div`
  padding: 0 2rem;
`;

const List = styled.div`
  height: 4.4rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 1.4rem;
  border-radius: 1rem;
  background: white;
  box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);

  .text {
    font-size: 1.2rem;
    font-weight: 500;
  }
`;
