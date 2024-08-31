import React from "react";
import styled from "styled-components";
// import MusicComponent from '../music/MusicConponent';

// //kanabon
// import kanabon from "../../asset/music/kanavon.png";
// import imissyouKanavon from "../../asset/music/kanavon/카나본 AI -I MISS YOU( 원곡_서지원).mp3";
// import heyKanavon from "../../asset/music/kanavon/카나본 AI - Hey Hey Hey( 원곡_김윤아).mp3";
// import namKanavon from "../../asset/music/kanavon/카나본 AI - 잘못된 만남 ( 원곡_김건모 ).mp3";

// //jiwon
// import jiwon from "../../asset/music/jiwon.png";
// import sorryJiwon from "../../asset/music/jiwon/서지원 AI _ 미안해 널 미워해 ( 김윤아 ).mp3";
// import toyJiwon from "../../asset/music/jiwon/서지원 AI_ 바램(토이).mp3";
// import namJiwon from "../../asset/music/jiwon/서지원 AI _ 잘못된 만남 ( 김건모 ).mp3";

// //kunmo
// import kunmo from "../../asset/music/kunmo.png";
// import nightKunmo from "../../asset/music/kunmo/김건모 AI_ 깊은 밤을 날아서 ( 이문세 ).mp3";
// import heyKunmo from "../../asset/music/kunmo/김건모  AI - Hey Hey Hey (원곡_ 김윤아).mp3";
// import imissyouKunmo from "../../asset/music/kunmo/김건모 AI -I MISS YOU(원곡_서지원).mp3";

// //songimg
// import simg1 from "../../asset/music/song1.png";
// import simg2 from "../../asset/music/song2.png";
// import simg3 from "../../asset/music/song3.png";
// import simg7 from "../../asset/music/song7.png";
// import simg8 from "../../asset/music/song8.png";
// import simg9 from "../../asset/music/song9.png";

// const songs = [
//     {
//       title: "I MISS YOU",
//       singer: "서지원",
//       src: [imissyouKanavon, imissyouKunmo],
//       image: [kanabon, kunmo],
//       ai: [kanabon, kunmo],
//       button: ["kanabon", "kunmo"],
//       songimg: [simg1],
//     },
//     {
//       title: "Hey Hey Hey",
//       singer: "김윤아",
//       src: [heyKanavon, heyKunmo],
//       image: [kanabon, kunmo],
//       ai: [kanabon, kunmo],
//       button: ["kanabon", "kunmo"],
//       songimg: [simg2],
//     },
//     {
//       title: "잘못된 만남",
//       singer: "김건모",
//       src: [namJiwon, namKanavon],
//       image: [jiwon, kanabon],
//       ai: [jiwon, kanabon],
//       button: ["jiwon", "kanabon"],
//       songimg: [simg3],
//     },

//     {
//       title: "바램",
//       singer: "토이",
//       src: [toyJiwon],
//       image: [jiwon],
//       ai: [jiwon],
//       button: ["jiwon"],
//       songimg: [simg7],
//     },
//     {
//       title: "미안해 널 미워해",
//       singer: "김윤아",
//       src: [sorryJiwon],
//       image: [jiwon],
//       ai: [jiwon],
//       button: ["jiwon"],
//       songimg: [simg9],
//     },
//     {
//       title: "깊은 밤을 날아서",
//       singer: "이문세",
//       src: [nightKunmo],
//       image: [kunmo],
//       ai: [kunmo],
//       button: ["kunmo"],
//       songimg: [simg8],
//     },
//   ];

const Container = styled.div`
  display: none;
  @media (max-width: 600px) {
    display: block;
    color: #fff;
    height: 100vh;
  }
`;

function Mobilemusic() {
  return <Container></Container>;
}

export default Mobilemusic;
