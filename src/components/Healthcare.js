import React, { useState, useRef } from "react";
import after from "../asset/after.mp4";
import before from "../asset/before.mp4";
import styled from "styled-components";
 
const Container = styled.div`
  width: 100%;
  height: 120vh;
  color: #fff;
  padding-top: 20%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    font-size: 30vw;
    font-weight: 900;
    top: 0;
    z-index: 0;
  }
`;
 
const Title = styled.h2`
  position: absolute;
  top: 180px;
  left: 150px;
  font-size: 30px;
  z-index: 4;
  @media (max-width: 600px) {
    top: 80px;
    left: 20px;
  }
`;
 
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vmin;
  height: 80vmin;
  position: relative;
  overflow: hidden;
  @media (max-width: 600px) {
    display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30vmin;
  }
`;
 
const VideoWrapper = styled.div`
  width: 100vmin;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

`;
 
const Divider = styled.div`
  width: 1vmin;
  cursor: ew-resize;
  background-color: #ffdeff;
  position: absolute;
  top: 0;
  bottom: -5vmin;
  left: ${(props) => props.position}%;
  &::before {
    content: "";
    width: 100vmin;
    height: 100vmin;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    right: 0;
  }
`;
 
const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vmin;
  height: 10vmin;
  span {
    color: #fff;
    font-size: 2vmin;
  }
  @media (max-width: 600px) {
    width: 80vmin;
  margin-right: 30vmin;

    span {
    font-size: 4vmin;
  }
  }
`;
 
const Video1 = styled.video`
  width: 100%;
  height: 100%;
`;
 
const Video2 = styled.video`
  width: 100%;
  height: 100%;
`;
 
const Healthcare = () => {
  const [position, setPosition] = useState(60);
  const dividerRef = useRef(null);
 
  const handleMouseMove = (e) => {
    if (dividerRef.current) {
      const rect = dividerRef.current.parentNode.getBoundingClientRect();
      const newPosition = ((e.clientX - rect.left) / rect.width) * 100;
 
      if (newPosition >= 0 && newPosition <= 100) {
        setPosition(newPosition);
      }
    }
  };
 
  const handleMouseDown = () => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };
 
  const handleMouseUp = () => {
    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  };
 
  return (
    <Container>
      <BgTitle>Health Care</BgTitle>
      <Title>Health Care</Title>
 
      <Wrapper>
        <VideoWrapper>
          {position > 50 ? (
            <Video1 src={before} autoPlay />
          ) : (
            <Video2 src={after} autoPlay />
          )}
        </VideoWrapper>
        <Divider
          ref={dividerRef}
          position={position}
          onMouseDown={handleMouseDown}
        />
      </Wrapper>
      <TextBox>
        <span>Before</span>
        <span>After</span>
      </TextBox>
    </Container>
  );
};
 
export default Healthcare;