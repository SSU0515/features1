import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import styled from "styled-components";
import Slide from "./demo/Slide";
import Modal from "./demo/Modal";
import { data } from "./demo/demodata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";

const Container = styled.div`
  width: 100%;
  height: 120vh;
  color: #fff;
  padding-top: 20%;
  position: relative;
  @media (max-width: 600px) {
    width: 100%;
    height: 80vh;
  }
`;

const BgTitle = styled.h3`
  position: absolute;
  top: 60px;
  right: 30%;
  font-size: 10vw;
  font-weight: 900;
  color: #222;
  z-index: 0;
  @media (max-width: 600px) {
    width: 200vw;
    left: 0;
    font-size: 30vw;
    font-weight: 900;
    top: 15px;
  }
`;

const Title = styled.h2`
  position: absolute;
  top: 180px;
  left: 150px;
  font-size: 30px;
  z-index: 4;
  @media (max-width: 600px) {
    font-size: 30px;
    font-weight: 900;
    top: 10vh;
    left: 20px;
  }
`;

const BoxContainer = styled.div`
  width: 100vw;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 35%;
  left: 0;
  @media (max-width: 600px) {
    height: 50vh;
    width: 100vw;
    left: -35vw;
    top: 20vh;
  }
`;

const Buttons = styled.div`
  position: absolute;
  top: 50%;
  left: 25vw;
  width: 50vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 0;
  @media (max-width: 768px) {
    left: 40vw;
    width: 90vw;
    z-index: 0;
  }
`;

const Button = styled.button`
  border: none;
  background-color: #555;
  color: #333;
  font-size: 5vmin;
  padding: 1.5vmin 3vmin;
  cursor: pointer;
  border-radius: 10vmin;
  &:hover {
    background-color: #fff;
    color: #ff723a;
  }
  @media (max-width: 800px) {
    font-size: 5vmin;
    z-index:0;
  };
`;

const boxVariants = {
  initial: (back) => ({
    x: back ? -500 : 500,
    opacity: 0,
    scale: 0.8,
  }),
  visible: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: (back) => ({
    x: back ? 500 : -500,
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  }),
};

function Demo() {
  const isMobile = window.innerWidth <= 600;

  const [back, setBack] = useState(false);
  const [visible, setVisible] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUrl, setSelectedUrl] = useState("");

  const nextBtn = () => {
    setBack(false);
    setVisible((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevBtn = () => {
    setBack(true);
    setVisible((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  const openModal = (url) => {
    setSelectedUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const prevIndex = visible === 0 ? data.length - 1 : visible - 1;
  const nextIndex = visible === data.length - 1 ? 0 : visible + 1;

  return (
    <Container>
      <BgTitle>Project</BgTitle>
      <Title>Project</Title>
      <BoxContainer>
        <AnimatePresence custom={back} mode="sync">
          {data.length > 0 && (
            <Slide
              key={`prev-${data[prevIndex].id}`}
              item={data[prevIndex]}
              img={data[prevIndex].src}
              variants={boxVariants}
              custom={back}
              position={isMobile ? "10%" : "3vw"}
              size="small"
              imgsize="small"
              isMobile={isMobile}
              onClick={() => openModal(data[prevIndex].url)} // Open modal on click
            />
          )}
          {data.length > 0 && (
            <Slide
              key={data[visible].id}
              item={data[visible]}
              img={data[visible].src}
              variants={boxVariants}
              custom={back}
              src={data[visible].url}
              position="calc(50% - 13.5vw)"
              size="large"
              imgsize="large"
              onClick={() => openModal(data[visible].url)} // Open modal on click
            />
          )}
          {data.length > 0 && (
            <Slide
              key={`next-${data[nextIndex].id}`}
              item={data[nextIndex]}
              img={data[nextIndex].src}
              variants={boxVariants}
              custom={back}
              position={isMobile ? "calc(110% )" : "calc(100% - 18vw)"}
              size="small"
              imgsize="small"
              onClick={() => openModal(data[nextIndex].url)} // Open modal on click
            />
          )}
        </AnimatePresence>
        <Buttons>
        <Button onClick={prevBtn}><FontAwesomeIcon icon={faCaretLeft} /></Button>
        <Button onClick={nextBtn}><FontAwesomeIcon icon={faCaretRight} /></Button>
      </Buttons>
      </BoxContainer>
      
      <Modal
        modalOpen={modalOpen}
        modalClose={closeModal}
        url={selectedUrl} // Pass the selected URL to Modal
      />
    </Container>
  );
}

export default Demo;
