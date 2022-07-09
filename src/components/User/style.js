import styled from "styled-components";

export const Wrap = styled.div`
  @font-face {
    font-family: "MICEGothic Bold";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2206-01@1.0/MICEGothic Bold.woff2")
      format("woff2");
    font-weight: 100;
    font-style: normal;
  }

  width: 230px;
  height: 176px;
  border-radius: 8px;
  box-shadow: 2px 0px 10px #aea4aa;
  margin: 0px 10px;
  position: relative;
`;

export const ProfilePicture = styled.div`
  width: 100px;
  height: 100px;
  position: absolute;
  background-color: #ffc8c8;
  border-radius: 100px;
  top: -50px;
  margin-left: 28.5%;
  box-shadow: 2px 2px 10px #aea4aa;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 16px;
`;
