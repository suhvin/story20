import React from "react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import styled from "@emotion/styled";

import CustomMargin from "../custom/custom-margin";
import CustomImage from "../custom/custom-image";
import CustomGap from "../custom/custom-gap";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  urlList: any[];
};

const UrlModal = ({ isOpen, onClose, urlList }: Props) => {
  const handleClick = (url: string) => {
    window.open(url, "_blank");
    onClose();
  };
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w="24rem" p="2rem 0" borderRadius="1rem" m="auto 0">
          <ModalBody
            display="flex"
            flexDirection="row"
            justifyContent="center"
            p={0}
          >
            {urlList &&
              urlList.map(
                (elem, index) =>
                  elem.url !== "" && (
                    <ImgBox key={index} onClick={() => handleClick(elem.url)}>
                      <CustomImage
                        src={`/asset/common/png/btn-${elem.name}-color.png`}
                        w={40}
                        h={40}
                      />
                      {/* <CustomGap w={8} /> */}
                    </ImgBox>
                  )
              )}
          </ModalBody>
          {/* <BottomBox /> */}
        </ModalContent>
      </Modal>
    </>
  );
};

export default UrlModal;

const ImgBox = styled.div`
  width: 7rem;
  height: 4rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
