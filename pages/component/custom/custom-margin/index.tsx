import React from "react";

type Props = {
  op?: string;
  h?: number;
};

const CustomMargin = ({ op, h }: Props) => {
  let customHeight = 0;
  if (h) {
    customHeight = h;
  } else {
    switch (op) {
      case "progressToBtn":
        customHeight = 32;
        break;
      default:
        customHeight = 0;
        break;
    }
  }

  return <div style={{ width: "100%", height: customHeight / 10 + "rem" }} />;
};

export default CustomMargin;
