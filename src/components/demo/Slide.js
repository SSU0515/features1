import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BoxContent from "./BoxContent";

const BoxBase = styled(motion.div)`
  position: absolute;
  top: 5vmin;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  background: ${(props) => `url(${props.background}) center center no-repeat`};
  background-size: contain;
  width: ${(props) => (props.size === "large" ? "50vmin" : "35vmin")};
  height: ${(props) => (props.size === "large" ? "50vmin" : "35vmin")};
  z-index: ${(props) => (props.size === "large" ? "3" : "0")};
  transition: all 0.3s linear;
  ${(props) =>
    props.size !== "large" &&
    `
      top: 18vmin;
      h2 {
        font-size: 25px;
      }
      p {
        font-size: 16px;
      }
    `};
  @media (max-width: 768px) {
    top: 15vmin;
    margin-left: 20vmin;
    width: ${(props) => (props.size === "large" ? "50vw" : "55vw")};
    height: ${(props) => (props.size === "large" ? "60vw" : "55vw")};
    display: ${(props) => (props.size === "large" ? "flex" : "none")};
  }
`;

const Title =styled.span`
  position: absolute;
  bottom: ${(props) => (props.size === "large" ? "-5vmin" : "-3vmin")};
  color: ${(props) => (props.size === "large" ? "#ff8817" : "#777")};
  font-size: 2vmin;
  font-weight: 600;

  @media (max-width: 768px) {
    justify-content: center;
    text-align: center;
    width: 100vw;
    bottom:-7vmin;
    left: 60%;
    transform: translate(-50%);
    font-size: 5vmin;
  }

`

const Slide = ({ item, variants, custom, position, size, imgsize }) => {
  return (
    <BoxBase
      key={item.id}
      variants={variants}
      custom={custom}
      initial="initial"
      animate="visible"
      exit="exit"
      style={{ left: position }}
      size={size}
    >
      <BoxContent item={item} img={item.src} imgsize={imgsize} />
      <Title size={size}>{item.title}</Title>
    </BoxBase>
  );
};

export default Slide;
