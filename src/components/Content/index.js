import React from "react";
import User from "../User";
import * as S from "./style";
import * as SVG from "../../SVG";
const Content = () => {
  return (
    <>
      <S.Major>
        <SVG.Dot />
        Frontend
      </S.Major>
      <S.Content_wrap>
        <User />
        <User />
        <User />
        <User />
        <User />
      </S.Content_wrap>
    </>
  );
};

export default Content;
