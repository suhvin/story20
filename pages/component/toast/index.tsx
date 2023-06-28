import styled from "@emotion/styled";
import React, { use, useEffect } from "react";
import { motion } from "framer-motion";
import { WarningIcon } from "@chakra-ui/icons";

type Props = {
  // 코드 리뷰 -> type은 enum으로 따로 빼기
  op: "success" | "error" | "info" | "action";
  title?: string;
  desc?: string;
  action?: string;
  handleClose: () => void;
  time?: number;
};

const Toast = ({ op, title = "", desc, action, handleClose, time }: Props) => {
  useEffect(() => {
    if (time) {
      setTimeout(() => {
        handleClose();
      }, time);
    }
  }, [time, handleClose]);
  return (
    <ToastContainer variants={toastVariants} initial="start" animate="end">
      <WarningIcon color={"white"} w="1.6rem" h="1.6rem" mr="0.8rem" />
      <p className="message">{title}</p>
    </ToastContainer>
  );
};

export default Toast;

const ToastContainer = styled(motion.div)`
  position: fixed;
  bottom: 1rem;
  left: calc(50% - 28rem / 2);
  width: 28rem;
  padding: 1.2rem;
  border-radius: 0.6rem;
  background-color: red;
  z-index: 999;
  .message {
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2rem;
    text-align: left;
    color: white;
  }
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const toastVariants = {
  start: {
    opacity: 0,
    scale: 1,
    y: 100,
  },
  end: {
    opacity: 0.5,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.7,
      bounce: 0.2,
    },
  },
};
