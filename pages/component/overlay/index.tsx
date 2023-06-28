import styled from "@emotion/styled";
import React from "react";

type Props = {
  op: string;
};

const Overlay = ({ op }: Props) => {
  return (
    <OverlayContainer>
      {op === "white" && <div className="white" />}
    </OverlayContainer>
  );
};

export default Overlay;

const OverlayContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 999;
  .white {
    height: 6rem;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.37) 59.15%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;
