// src/components/AudioPlayer.tsx

import React, { useRef } from 'react';
import styled from 'styled-components';
import sound1 from "../asset/inrain.wav"
import sound2 from "../asset/insea.wav"
import music1 from "../asset/변환음성_ 새벽에 천둥이 치고 비가 내렸어요. 1.mp3"
import music2 from "../asset/변환음성_ 바다에서 부드러운 바람을 맞으며 비빔밥을 먹었다. 1.mp3"


// 그룹별 타이틀과 파일 묶기
const audioGroups = [
    {
      title: 'Voice conversion example 1',
      files: [
        { label: 'Input Sound', src: sound1, color: '#ff8817' },
        { label: 'Output Sound', src: music1, color: '#3b82f6' },
      ],
    },
    {
      title: 'Voice conversion example 2',
      files: [
        { label: 'Input Sound', src: sound2, color: '#ff8817' },
        { label: 'Output Sound', src: music2, color: '#3b82f6' },
      ],
    },
  ];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 50px;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  gap: 5vmin;
  background-color: rgba(255,255,255,0.3);
  border-radius: 10vmin;
  padding: 5vmin;
  margin-bottom: 5vmin;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const GroupTitle = styled.h2`
  text-align: center;
  font-size: 20px;
  margin-bottom: 10px;
  color: #ddd;
`;

const StyledButton = styled.button`
  width: 150px;
  padding: 12px;
  font-size: 16px;
  background-color: ${(props) => props.color};
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s;
  font-family: "Noto Sans", sans-serif;
  &:hover {
    opacity: 0.85;
  }
`;

const AudioPlayer = () => {
  const audioRefs = useRef([]);

  const handlePlay = (index) => {
    audioRefs.current.forEach((audio, i) => {
      if (audio && i !== index) {
        audio.pause();
        audio.currentTime = 0;
      }
    });
    audioRefs.current[index]?.play();
  };
  let currentIndex = 0;
  return (
    <Container>
      {audioGroups.map((group, groupIndex) => (
        <div key={groupIndex}>
          <GroupTitle>{group.title}</GroupTitle>
          <Row>
            {group.files.map((audio, index) => {
              const idx = currentIndex++;
              return (
                <ButtonWrapper key={idx}>
                  <StyledButton color={audio.color} onClick={() => handlePlay(idx)}>
                    {audio.label}
                  </StyledButton>
                  <audio ref={el => (audioRefs.current[idx] = el)} src={audio.src} />
                </ButtonWrapper>
              );
            })}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default AudioPlayer;

