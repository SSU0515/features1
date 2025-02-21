import React, { useState, useRef } from "react";
import after from "../asset/after.mp4";
import before from "../asset/before.mp4";
import after1 from "../asset/after1.mp4";
import before1 from "../asset/before1.mp4";
import styled from "styled-components";
import videoBg from "../asset/videoBg1.jfif";
import videoBg2 from "../asset/videoBg2.jfif";
import divider from "../asset/divider.svg";

const Container = styled.div`
  width: 100%;
  height: 150vh;
  color: #fff;
  padding-top: 20%;
  position: relative;
  display: flex;
  gap: 5%;
  justify-content: center;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
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
    font-size: 30vw;
    font-weight: 900;
    top: 0;
    left:0;
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
  background-image: url(${videoBg});
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Wrapper2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vmin;
  height: 80vmin;
  position: relative;
  overflow: hidden;
  background-image: url(${videoBg2});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
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
  width: 10vmin;
  height: 100vmin;
  cursor: ew-resize;
  background-image: url(${divider});
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.position}%;
  &::before {
    content: "";
    width: 90vmin;
    height: 100vmin;
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    top: 0;
    right: 5vmin;
  }
`;

const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80vmin;
  height: 10vmin;

  span {
    color: #000;
    font-size: 2vmin;
    background-color: #888;
    padding: 1vmin;
    border-radius: 1vmin;
  }
  @media (max-width: 600px) {
    width: 80vmin;

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

const Video3 = styled.video`
  width: 100%;
  height: 100%;
`;

const Video4 = styled.video`
  width: 100%;
  height: 100%;
`;


const Healthcare = () => {
  const [position1, setPosition1] = useState(45);
  const [position2, setPosition2] = useState(45);
  const dividerRef1 = useRef(null);
  const dividerRef2 = useRef(null);
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const handleMouseMove1 = (e) => {
    if (dividerRef1.current) {
      const rect = dividerRef1.current.parentNode.getBoundingClientRect();
      const newPosition = ((e.clientX - rect.left) / rect.width) * 90;
      if (newPosition >= 0 && newPosition <= 100) {
        setPosition1(newPosition);
        if (videoRef1.current) {
          videoRef1.current.play(); // 비디오 재생
        }
      }
    }
  };

  const handleTouchMove1 = (e) => {
    if (dividerRef1.current) {
      const rect = dividerRef1.current.parentNode.getBoundingClientRect();
      const touch = e.touches[0];
      const newPosition = ((touch.clientX - rect.left) / rect.width) * 90;
      if (newPosition >= 0 && newPosition <= 100) {
        setPosition1(newPosition);
        if (videoRef1.current) {
          videoRef1.current.play(); // 비디오 재생
        }
      }
    }
  };

  const handleMouseMove2 = (e) => {
    if (dividerRef2.current) {
      const rect = dividerRef2.current.parentNode.getBoundingClientRect();
      const newPosition = ((e.clientX - rect.left) / rect.width) * 90;
      if (newPosition >= 0 && newPosition <= 100) {
        setPosition2(newPosition);
        if (videoRef2.current) {
          videoRef2.current.play(); // 비디오 재생
        }
      }
    }
  };

  const handleTouchMove2 = (e) => {
    if (dividerRef2.current) {
      const rect = dividerRef2.current.parentNode.getBoundingClientRect();
      const touch = e.touches[0];
      const newPosition = ((touch.clientX - rect.left) / rect.width) * 90;
      if (newPosition >= 0 && newPosition <= 100) {
        setPosition2(newPosition);
        if (videoRef2.current) {
          videoRef2.current.play(); // 비디오 재생
        }
      }
    }
  };

  const handleMouseDown1 = () => {
    window.addEventListener("mousemove", handleMouseMove1);
    window.addEventListener("mouseup", handleMouseUp1);
  };

  const handleTouchStart1 = () => {
    window.addEventListener("touchmove", handleTouchMove1);
    window.addEventListener("touchend", handleTouchEnd1);
  };

  const handleMouseDown2 = () => {
    window.addEventListener("mousemove", handleMouseMove2);
    window.addEventListener("mouseup", handleMouseUp2);
  };

  const handleTouchStart2 = () => {
    window.addEventListener("touchmove", handleTouchMove2);
    window.addEventListener("touchend", handleTouchEnd2);
  };

  const handleMouseUp1 = () => {
    window.removeEventListener("mousemove", handleMouseMove1);
    window.removeEventListener("mouseup", handleMouseUp1);
  };

  const handleTouchEnd1 = () => {
    window.removeEventListener("touchmove", handleTouchMove1);
    window.removeEventListener("touchend", handleTouchEnd1);
  };

  const handleMouseUp2 = () => {
    window.removeEventListener("mousemove", handleMouseMove2);
    window.removeEventListener("mouseup", handleMouseUp2);
  };

  const handleTouchEnd2 = () => {
    window.removeEventListener("touchmove", handleTouchMove2);
    window.removeEventListener("touchend", handleTouchEnd2);
  };

  return (
    <Container>
      <BgTitle>Health Care</BgTitle>
      <Title>Health Care</Title>
      <div>
        <Wrapper>
          <VideoWrapper>
            {position1 > 50 ? (
              <Video1 ref={videoRef1} src={before} />
            ) : (
              <Video2 ref={videoRef1} src={after} />
            )}
          </VideoWrapper>
          <Divider
            ref={dividerRef1}
            position={position1}
            onMouseDown={handleMouseDown1}
            onTouchStart={handleTouchStart1}
          />
        </Wrapper>
        <TextBox>
          <span>Input</span>
          <span>Output</span>
        </TextBox>
      </div>
      <div>
        <Wrapper2>
          <VideoWrapper>
            {position2 > 50 ? (
              <Video3 ref={videoRef2} src={before1} />
            ) : (
              <Video4 ref={videoRef2} src={after1} />
            )}
          </VideoWrapper>
          <Divider
            ref={dividerRef2}
            position={position2}
            onMouseDown={handleMouseDown2}
            onTouchStart={handleTouchStart2}
          />
        </Wrapper2>
        <TextBox>
          <span>Input</span>
          <span>Output</span>
        </TextBox>
      </div>
    </Container>
  );
};


export default Healthcare;
