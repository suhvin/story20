import styled from "@emotion/styled";
import React from "react";

type Props = {
  tagList: string[];
};

const TagBox = ({ tagList }: Props) => {
  return (
    <TagBoxContainer>
      {tagList.map((item: any, index: number) => {
        return (
          <Tag key={index}>
            <p className="textPrimary"># {item}</p>
          </Tag>
        );
      })}
    </TagBoxContainer>
  );
};

export default TagBox;

const TagBoxContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const Tag = styled.div`
  padding: 0.2rem 0.8rem;
  margin-right: 0.6rem;
  border-radius: 0.4rem;
  font-size: 1.1rem;
  font-weight: 600;

  background-color: rgba(101, 186, 250, 0.15);
`;
