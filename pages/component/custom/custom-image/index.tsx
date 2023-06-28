import Image from "next/image";
import React from "react";
import { ReactSVG } from "react-svg";

type Props = {
  src: string;
  op?: "fill" | "stroke" | "png";
  w?: number;
  h?: number;
  o?: number;
  c?: string;
  onClick?: () => void;
  isWidth100?: boolean;
  isHeight100?: boolean;
};

const CustomImage = ({
  src,
  op = "png",
  w = 36,
  h = 36,
  o = 1,
  c = "var(--primary)",
  onClick,
  isWidth100 = false,
  isHeight100 = false,
}: Props) => {
  switch (op) {
    case "fill":
      return (
        <div
          style={{
            width: w / 10 + "rem",
            height: h / 10 + "rem",
            overflow: "hidden",
          }}
          onClick={onClick}
        >
          <ReactSVG
            src={src}
            width={100}
            height={100}
            beforeInjection={(svg: any) => {
              svg.setAttribute(op, c);
            }}
          />
        </div>
      );
    case "stroke":
      return (
        <div
          style={{
            width: w / 10 + "rem",
            height: h / 10 + "rem",
            overflow: "hidden",
          }}
          onClick={onClick}
        >
          <ReactSVG
            src={src}
            width={100}
            height={100}
            beforeInjection={(svg: any) => {
              svg.setAttribute(op, c);
            }}
          />
        </div>
      );
    case "png":
      return (
        <div
          style={{
            width: isWidth100 ? "100%" : w,
            height: isHeight100 ? "100%" : h,
            overflow: "hidden",
          }}
          onClick={onClick}
        >
          <Image
            src={src}
            alt=""
            width={1000}
            height={1000}
            style={{ opacity: o }}
          />
        </div>
      );
  }
};

export default CustomImage;
