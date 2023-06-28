import React from "react";

type Props = {
  op?: string;
  w?: number;
};

const CustomGap = ({ op, w }: Props) => {
  let customWidth = 0;
  if (w) {
    customWidth = w;
  } else {
    switch (op) {
      case "progressToBtn":
        customWidth = 32;
        break;
      default:
        customWidth = 0;
        break;
    }
  }

  return <div style={{ height: "100%", width: customWidth / 10 + "rem" }} />;
};

export default CustomGap;
